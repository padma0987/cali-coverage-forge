import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-plum px-6 py-12 sm:px-14 sm:py-16"
        style={{ backgroundImage: "var(--glow-plum)" }}
      >
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Let&rsquo;s protect</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-[1.15] sm:text-[40px]">
              We can&rsquo;t predict future,
              <br />
              but we can prepare
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A short conversation is usually enough to see where your coverage stands today, what a
              gap would actually cost your household, and which carriers price your situation best.
              No pressure, no cost.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-center">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.altPhoneHref}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              Call {site.altPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
