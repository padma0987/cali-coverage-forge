import { createFileRoute } from "@tanstack/react-router";
import { FinalContact } from "@/components/FinalContact";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Charlie M Richardson Insurance, California" },
      {
        name: "description",
        content:
          "Request a free insurance consultation or quote in California. Call +1 714-809-6503 or send a short message about the coverage you need.",
      },
      { property: "og:title", content: "Contact Charlie M Richardson" },
      {
        property: "og:description",
        content: "Free California insurance consultations and quotes. No pressure, no cost.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 pb-4 pt-16 sm:px-8 sm:pt-20">
        <span className="block h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="mt-8 max-w-3xl text-[36px] leading-[1.08] sm:text-[52px]">
          Let&rsquo;s talk about
          <br />
          what you need covered.
        </h1>
      </section>

      <FinalContact
        heading={["Get your free", "insurance consultation.", "Serving all of California."]}
      />
      <CTASection />
    </>
  );
}
