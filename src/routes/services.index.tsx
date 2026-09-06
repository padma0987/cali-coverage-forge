import { createFileRoute } from "@tanstack/react-router";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { FinalContact } from "@/components/FinalContact";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Insurance Services in California | Charlie M Richardson" },
      {
        name: "description",
        content:
          "Life, health, Medicare, group benefits, retirement, disability and business owner insurance services for California individuals and companies.",
      },
      { property: "og:title", content: "Insurance Services in California" },
      {
        property: "og:description",
        content:
          "Explore life, health, Medicare, retirement, disability and business protection services across California.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <span className="block h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="mt-8 max-w-3xl text-[38px] leading-[1.08] sm:text-[54px]">
          Coverage built around
          <br />
          how you actually live.
        </h1>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-12 sm:px-8 sm:py-16">
        <SectionIntro
          eyebrow="We serve"
          heading={
            <>
              Services and offers
              <br />
              curated for your need
            </>
          }
          body="From a first family policy to group benefits and business continuity planning, each service below is delivered the same way: your numbers first, then a side-by-side comparison of A-rated California carriers."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection />
      <FinalContact />
    </>
  );
}
