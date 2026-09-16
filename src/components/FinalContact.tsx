import { Mail, Phone } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { site } from "@/data/site";

export type FinalWordCopy = {
  finalWordHeading?: string | null;
  finalWordData?: string | null;
};

export function getFinalWordContent(data: FinalWordCopy = {}) {
  const heading = data.finalWordHeading?.trim();
  const body = data.finalWordData?.trim();

  if (!heading || !body) return null;

  return { heading, body };
}

export function FinalContact(props: FinalWordCopy) {
  const finalWord = getFinalWordContent(props);

  if (!finalWord) return null;

  const headingLines = finalWord.heading
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Final word</p>
          <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[42px]">
            {headingLines.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="body-copy mt-5 max-w-md text-muted-foreground">{finalWord.body}</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-gold"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 break-all text-muted-foreground transition-colors hover:text-gold"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}