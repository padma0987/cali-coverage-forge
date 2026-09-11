import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { Accordion } from "@/components/Accordion";
import { FinalContact } from "@/components/FinalContact";
import { featuredServices } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { approachCards, heroCopy, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charlie M Richardson | Life & Health Insurance in USA" },
      {
        name: "description",
        content:
          "Insurance solutions for families, individuals and business owners across USA, including life insurance, health insurance, Medicare, retirement and disability protection.",
      },
      {
        property: "og:title",
        content: "Charlie M Richardson | Life & Health Insurance in USA",
      },
      {
        property: "og:description",
        content:
          "Life, health, Medicare, retirement and disability coverage for USA families and business owners.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="fade-up max-w-3xl">
          <span className="block h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="mt-8 text-[38px] leading-[1.08] sm:text-[56px] lg:text-[64px]">
            {heroCopy.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {heroCopy.paragraph}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-gold inline-flex items-center rounded-full px-6 py-3.5 text-sm"
            >
              Request a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <SectionIntro
          eyebrow="We serve"
          heading={
            <>
              Serving Individuals, Families,
              <br />
             Professionals & Businesses Nationwide 
            </>
          }
          body={heroCopy.paragraph}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection />

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <SectionIntro
          eyebrow="What makes us apart"
          heading={
            <>
              Our
              <br />
              Approach
            </>
          }
          body="Charlie M. Richardson provides insurance, retirement and financial planning across all 50 states, helping clients protect their family, income, businesses, and financial futures through personalized strategies built around their goals."
        />
        <div className="mt-14 space-y-4">
          {approachCards.map((card) => (
            <article key={card.title} className="card-elegant p-7 sm:p-9">
             <span className="step-label">{card.step}</span>
              <h3 className="text-lg sm:text-xl">{card.title}</h3>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[42px]">
              You Ask
              <br />
              We Answer
            </h2>
          </div>
          <Accordion items={generalFaqs} />
        </div>
      </section>

      <FinalContact />
    </>
  );
}
