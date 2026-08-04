"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inquiryTypes = [
  "New program quote",
  "Existing program support",
  "Facility tour",
  "General inquiry",
] as const;

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("spec-corners border border-border bg-surface p-8 text-center", className)}>
        <CheckCircle2 className="mx-auto h-10 w-10 text-status" aria-hidden />
        <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-foreground">
          Message received
        </h3>
        <p className="mt-2 text-sm text-muted">
          A program engineer will follow up within two business days.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <Field label="Inquiry type" htmlFor="inquiryType">
        <select id="inquiryType" name="inquiryType" defaultValue={inquiryTypes[0]} className={inputClass}>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project details" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Part volume, materials, target tolerance, timeline..."
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-accent">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight />
          </>
        )}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full border border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus-visible:border-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
