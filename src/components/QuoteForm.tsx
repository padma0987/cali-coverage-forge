import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { site } from "@/data/site";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-.\s]+$/, "Enter a valid phone number"),
  message: z.string().trim().max(1000).optional(),
});

export type QuoteFormValues = z.infer<typeof schema>;

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fields = [
  { name: "firstName", label: "First Name", placeholder: "Jane", type: "text", half: true },
  { name: "lastName", label: "Last Name", placeholder: "Doe", type: "text", half: true },
  { name: "email", label: "Email", placeholder: "jane@example.com", type: "email", half: false },
  {
    name: "phone",
    label: "Phone (for call/text quotes)",
    placeholder: "(555) 123-4567",
    type: "tel",
    half: false,
  },
] as const;

export function QuoteForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Partial<Record<keyof QuoteFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof QuoteFormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSubmitError("");
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error(
          "The quote form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to the project's environment variables."
        );
      }

      const submission = new FormData();
      submission.append("access_key", accessKey);
      submission.append("subject", "New Insurance Quote Request - Charlie M Richardson");
      submission.append("from_name", `${result.data.firstName} ${result.data.lastName}`);
      submission.append("first_name", result.data.firstName);
      submission.append("last_name", result.data.lastName);
      submission.append("email", result.data.email);
      submission.append("replyto", result.data.email);
      submission.append("phone", result.data.phone);
      submission.append("message", result.data.message || "Not provided");
      submission.append("submitted_at", new Date().toISOString());
      submission.append("botcheck", String(formData.get("botcheck") ?? ""));

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: submission,
      });
      const responseData = (await response.json().catch(() => ({}))) as Web3FormsResponse;

      if (!response.ok || responseData.success !== true) {
        throw new Error(
          responseData.message || "We couldn't send your request. Please try again.",
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-5 text-2xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for contacting us. Your request has been submitted successfully. We will get
          back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label
              htmlFor={f.name}
              className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            {errors[f.name] && (
              <p id={`${f.name}-error`} className="mt-1.5 text-xs text-destructive">
                {errors[f.name]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
          >
            How can we help you today?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Briefly explain what coverage you're looking for..."
            className="mt-2 w-full resize-y rounded-md border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      {submitError && (
        <p role="alert" className="mt-4 text-center text-xs text-destructive">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="btn-gold mt-6 w-full rounded-md py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Request Your Free Quote"}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Prefer to call? Reach us at{" "}
        <a href={site.phoneHref} className="text-gold hover:underline">
          {site.phone}
        </a>
      </p>
    </form>
  );
}
