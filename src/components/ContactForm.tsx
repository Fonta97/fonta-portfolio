"use client";

import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useRef } from "react";

type ContactFormCopy = {
  name: string;
  email: string;
  project: string;
  budget: string;
  message: string;
  placeholderBudget: string;
  placeholderMessage: string;
  button: string;
  sending: string;
  success: string;
  error: string;
  options: readonly string[];
};

type ContactFormProps = {
  copy: ContactFormCopy;
};

export function ContactForm({ copy }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mnjllagv");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  const hasErrors = !state.succeeded && Boolean(state.errors);

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} aria-busy={state.submitting}>
      <input type="hidden" name="_subject" value="Project inquiry from Fonta portfolio" />
      <input type="hidden" name="source" value="fonta-portfolio-contact-form" />
      <div className="contact-form__row">
        <label>
          {copy.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {copy.email}
          <input name="email" type="email" autoComplete="email" required />
          <ValidationError className="contact-form__error" field="email" errors={state.errors} />
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
        <ValidationError className="contact-form__error" field="message" errors={state.errors} />
      </label>
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? copy.sending : copy.button}
      </button>
      <p aria-live="polite" className="contact-form__status">
        {state.succeeded ? copy.success : hasErrors ? copy.error : ""}
      </p>
    </form>
  );
}
