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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Partial<Record<keyof QuoteFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof QuoteFormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // Ready for future API integration: POST result.data to the quote endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-5 text-2xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you. Your request has been recorded and Charlie will follow up shortly. Prefer to
          talk now? Call {site.phone}.
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

      <button type="submit" className="btn-gold mt-6 w-full rounded-md py-3.5 text-sm">
        Request Your Free Quote
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
