"use client";

import { useState, useEffect } from "react";

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
  const [toast, setToast] = useState(null);
  const [isToastClosing, setIsToastClosing] = useState(false);

  const isLoading = status === "loading";

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast) {
      setIsToastClosing(false);
      const timer = setTimeout(() => {
        setIsToastClosing(true);
        setTimeout(() => {
          setToast(null);
          setIsToastClosing(false);
        }, 300); // Match animation duration
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validateField = (name, value) => {
    switch (name) {
      case "phone":
        // Numbers only (allow spaces, dashes, parentheses, plus sign for international)
        return !value || /^[\d\s\-\+\(\)]+$/.test(value);
      case "email":
        // Valid email format
        if (!value) return true; // Email is optional
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "name":
        return value.length <= 20;
      case "company":
        return value.length <= 40;
      case "message":
        return value.length <= 200;
      default:
        return true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // For phone field, only allow numbers and common phone characters
    if (name === "phone") {
      // Allow only numbers, spaces, dashes, parentheses, and plus sign
      if (value && !/^[\d\s\-\+\(\)]*$/.test(value)) {
        return; // Don't update if invalid character
      }
    }
    
    // Enforce max length
    const maxLengths = {
      name: 20,
      company: 40,
      message: 200,
    };
    
    if (maxLengths[name] && value.length > maxLengths[name]) {
      return; // Don't update if exceeds max length
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Validate and update errors
    const isValid = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: !isValid }));
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

    // Validate all fields
    const newErrors = {};
    
    // Required fields
    if (!trimmedData.name) {
      newErrors.name = true;
    } else if (trimmedData.name.length > 20) {
      newErrors.name = true;
    }
    
    // Email validation - must be present and valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedData.email) {
      newErrors.email = true;
    } else if (!emailRegex.test(trimmedData.email.trim())) {
      newErrors.email = true;
    }
    
    if (!trimmedData.message) {
      newErrors.message = true;
    } else if (trimmedData.message.length > 200) {
      newErrors.message = true;
    }
    
    // Optional fields validation
    if (trimmedData.phone && !/^[\d\s\-\+\(\)]+$/.test(trimmedData.phone)) {
      newErrors.phone = true;
    }
    
    if (trimmedData.company && trimmedData.company.length > 40) {
      newErrors.company = true;
    }

    // Prevent form submission if there are any validation errors
    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setStatus("error");
      setErrorMessage(
        "Veuillez vérifier les champs du formulaire. Certains champs contiennent des erreurs."
      );
      // Show toast for email validation error specifically
      if (newErrors.email) {
        setToast({
          type: "error",
          message: "Veuillez entrer une adresse email valide.",
        });
      }
      return; // Stop form submission
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
      setToast({
        type: "success",
        message: "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.",
      });
    } catch (error) {
      setStatus("error");
      const errorMsg =
        error?.message ??
        "Une erreur inattendue est survenue. Veuillez réessayer.";
      setErrorMessage(errorMsg);
      setToast({
        type: "error",
        message: errorMsg,
      });
    }
  };

  return (
    <>
      {toast && (
        <div
          className={`toast toast-${toast.type}${isToastClosing ? " closing" : ""}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        id="contact-form"
        aria-label="Formulaire de contact"
        noValidate
      >

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
          maxLength={20}
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
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
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
          pattern="[\d\s\-\+\(\)]+"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={fieldErrors.phone ? "true" : undefined}
          className={fieldErrors.phone ? "error" : undefined}
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
          maxLength={40}
          value={formData.company}
          onChange={handleChange}
          aria-invalid={fieldErrors.company ? "true" : undefined}
          className={fieldErrors.company ? "error" : undefined}
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
          Message <span aria-label="requis">*</span> <span className="char-limit">(200 caractères)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
          maxLength={200}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={fieldErrors.message ? "true" : undefined}
          className={fieldErrors.message ? "error" : undefined}
          disabled={isLoading}
        />
        <div className="char-counter">
          {formData.message.length}/200
        </div>
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
    </>
  );
};

export default ContactForm;

