"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CTAButton } from "@/components/common/CTAButton";
import {
  ConsultationFields,
  GENERAL,
  type FieldErrors,
  type FormValues,
} from "@/components/landing/Contact/ConsultationFields";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "error" | "success";

export interface ConsultationFormProps {
  defaultArea?: string;
}

/** Accessible consultation form. POSTs to /api/contact; the only client piece. */
export function ConsultationForm({ defaultArea }: ConsultationFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: defaultArea ?? GENERAL,
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "error" || status === "success") statusRef.current?.focus();
  }, [status]);

  const onField = (key: keyof FormValues) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!values.fullName.trim()) e.fullName = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(values.email))
      e.email = "Please enter a valid email address.";
    if (!values.message.trim()) e.message = "Please tell us how we can help.";
    return e;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("submitting");
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) return setStatus("success");
      if (res.status === 422) {
        const data = (await res.json()) as { errors?: FieldErrors };
        setErrors(data.errors ?? {});
        setFormError("Please check the highlighted fields and try again.");
      } else {
        setFormError("Sorry, something went wrong. Please try again.");
      }
      setStatus("error");
    } catch {
      setFormError("Sorry, something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-muted p-8 focus:outline-none"
      >
        <CheckCircle2 aria-hidden className="size-8 text-accent" />
        <h3 className="font-display text-xl font-semibold text-ink">
          Thank you — your request is on its way.
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your details and will be in touch shortly to
          arrange a time to talk.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <ConsultationFields values={values} errors={errors} onField={onField} />

      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="text-sm focus:outline-none"
      >
        {submitting ? (
          <span className="text-muted-foreground">Sending your request…</span>
        ) : formError ? (
          <span className="text-destructive">{formError}</span>
        ) : null}
      </div>

      <CTAButton
        type="submit"
        variant="gold"
        size="lg"
        disabled={submitting}
        className="w-full sm:w-auto sm:self-start"
      >
        {submitting ? "Sending…" : "Send request"}
      </CTAButton>
    </form>
  );
}
