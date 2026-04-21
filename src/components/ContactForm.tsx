"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type ContactFormCopy = {
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
  placeholderBudget: string;
  placeholderMessage: string;
  button: string;
  status: string;
  options: readonly string[];
};

type ContactFormProps = {
  copy: ContactFormCopy;
  email: string;
};

export function ContactForm({ copy, email }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const senderEmail = String(form.get("email") || "");
    const project = String(form.get("project") || "");
    const budget = String(form.get("budget") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Project inquiry from ${name || "Portfolio visitor"}`);
    const body = encodeURIComponent(
      [
        `${copy.name}: ${name}`,
        `${copy.email}: ${senderEmail}`,
        `${copy.project}: ${project}`,
        `${copy.budget}: ${budget}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus(copy.status);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          {copy.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {copy.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        {copy.project}
        <select name="project" defaultValue={copy.options[0]}>
          {copy.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        {copy.budget}
        <input name="budget" type="text" placeholder={copy.placeholderBudget} />
      </label>
      <label>
        {copy.message}
        <textarea name="message" rows={5} placeholder={copy.placeholderMessage} required />
      </label>
      <button type="submit">{copy.button}</button>
      <p aria-live="polite" className="contact-form__status">
        {status}
      </p>
    </form>
  );
}
