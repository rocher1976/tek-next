import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_RECIPIENT",
];

function ensureEnv() {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing environment variables: ${missing.join(
        ", "
      )}. Update your SMTP configuration.`
    );
  }
}

function createTransporter() {
  ensureEnv();

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildMailOptions(payload) {
  const {
    name,
    email,
    phone,
    company,
    service,
    message,
    recipient = process.env.CONTACT_RECIPIENT,
  } = payload;

  const subject = `Nouveau message de contact - ${name ?? "Visiteur"}`;
  const textBody = `
Nom: ${name ?? "Non renseigné"}
Email: ${email ?? "Non renseigné"}
Téléphone: ${phone ?? "Non renseigné"}
Entreprise: ${company ?? "Non renseigné"}
Service: ${service ?? "Non renseigné"}

Message:
${message ?? "Non renseigné"}
`;

  const htmlBody = `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom:</strong> ${name ?? "Non renseigné"}</p>
    <p><strong>Email:</strong> ${email ?? "Non renseigné"}</p>
    <p><strong>Téléphone:</strong> ${phone ?? "Non renseigné"}</p>
    <p><strong>Entreprise:</strong> ${company ?? "Non renseigné"}</p>
    <p><strong>Service:</strong> ${service ?? "Non renseigné"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${(message ?? "").replace(/\n/g, "<br />")}</p>
  `;

  return {
    from: `"${name ?? "Formulaire de contact"}" <${
      process.env.SMTP_USER ?? ""
    }>`,
    replyTo: email,
    to: recipient,
    subject,
    text: textBody,
    html: htmlBody,
  };
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Les champs nom, email et message sont obligatoires. Veuillez vérifier le formulaire.",
        },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const mailOptions = buildMailOptions(payload);

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a été envoyé avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact-api] send error:", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}

