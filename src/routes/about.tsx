import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { TrustStrip } from "@/components/TrustStrip";
import { FinalContact } from "@/components/FinalContact";
import headshotAsset from "@/assets/charlie-headshot.jpg.asset.json";
import { approachCards, site } from "@/data/site";

const headshot = headshotAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Charlie M Richardson | California Insurance Advisor" },
      {
        name: "description",
        content:
          "Meet Charlie M Richardson, an independent California insurance advisor helping families and business owners compare life, health, Medicare and retirement coverage.",
      },
      { property: "og:title", content: "About Charlie M Richardson" },
      {
        property: "og:description",
        content:
          "An independent California insurance advisor for families, individuals and business owners.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
        <span className="block h-px w-12 bg-gold" aria-hidden="true" />
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-[36px] leading-[1.1] sm:text-[50px]">
              Independent advice,
              <br />
              built on your numbers.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {site.name} works with individuals, families and business owners across California.
              Because the practice is independent, recommendations begin with what you need rather
              than a single company&rsquo;s product shelf, and quotes are compared across 30+
              A-rated carriers.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              The work covers health insurance, Medicare, group and employee benefits, life
              insurance including Indexed Universal Life, retirement income planning, disability
              income protection and business owner coverage.
            </p>
          </div>
          <img
            src={headshot}
            alt="Charlie M Richardson, independent California insurance advisor"
            width={816}
            height={816}
            loading="lazy"
            className="w-full max-w-sm rounded-xl border border-border object-cover"
          />
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow">What makes us apart</p>
        <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[42px]">
          Our
          <br />
          Approach
        </h2>
        <div className="mt-12 space-y-4">
          {approachCards.map((card) => (
            <article key={card.title} className="card-elegant p-7 sm:p-9">
              <h3 className="text-lg sm:text-xl">{card.title}</h3>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
      <FinalContact />
    </>
  );
}
