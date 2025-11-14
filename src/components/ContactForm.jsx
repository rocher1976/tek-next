"use client";

import { useState } from "react";

const defaultServices = [
  { value: "", label: "Sélectionnez un service" },
  { value: "numerisation", label: "Numérisation" },
  { value: "conseil", label: "Conseil" },
  { value: "sous-traitance", label: "Sous-traitance" },
  { value: "autre", label: "Autre" },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const ContactForm = ({ services = defaultServices }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isLoading = status === "loading";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    const newErrors = {};
    if (!trimmedData.name) newErrors.name = true;
    if (!trimmedData.email) newErrors.email = true;
    if (!trimmedData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setStatus("error");
      setErrorMessage(
        "Merci de remplir tous les champs obligatoires avant de soumettre le formulaire."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.error ??
            "Impossible d'envoyer votre message. Veuillez réessayer."
        );
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error?.message ??
          "Une erreur inattendue est survenue. Veuillez réessayer."
      );
    }
  };

  const showSuccess = status === "success";
  const showError = status === "error" && errorMessage;

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      id="contact-form"
      aria-label="Formulaire de contact"
      noValidate
    >
      {showSuccess && (
        <div className="form-success" role="status" tabIndex={-1}>
          Merci pour votre message ! Nous vous répondrons dans les plus brefs
          délais.
        </div>
      )}

      {showError && (
        <div className="form-error" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">
          Nom complet <span aria-label="requis">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={fieldErrors.name ? "true" : undefined}
          className={fieldErrors.name ? "error" : undefined}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email <span aria-label="requis">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={fieldErrors.email ? "true" : undefined}
          className={fieldErrors.email ? "error" : undefined}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Entreprise</label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service concerné</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={isLoading}
        >
          {services.map(({ value, label }) => (
            <option key={value ?? label} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message <span aria-label="requis">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={fieldErrors.message ? "true" : undefined}
          className={fieldErrors.message ? "error" : undefined}
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        className="service-button"
        disabled={isLoading}
        style={{ marginTop: "10px" }}
      >
        {isLoading ? "Envoi en cours..." : "ENVOYER"}
      </button>
    </form>
  );
};

export default ContactForm;

