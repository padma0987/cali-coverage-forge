import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { Accordion } from "@/components/Accordion";
import { FinalContact } from "@/components/FinalContact";
import { relatedServiceGrid, serviceBySlug, serviceMenu } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) {
      return { meta: [{ title: "Service unavailable" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = serviceBySlug(slug)!;
  const groupTabs = serviceMenu.find((g) => g.items.some((i) => i.slug === service.slug));



  return (
    <>
      <section className="mx-auto max-w-[1360px] px-5 pb-12 pt-16 sm:px-8 sm:pb-20 sm:pt-20">
        <span className="block h-px w-12 bg-gold" aria-hidden="true" />
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">The problem</p>
            <h1 className="mt-4 text-[34px] leading-[1.1] sm:text-[46px]">
              {service.problemHeading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
          <ol className="divide-y divide-border border-t border-border">
            {service.problems.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[auto_1fr] gap-5 py-6">
                <span className="font-display text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-sans text-[15px] font-medium">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">What makes us apart</p>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[40px]">{service.title}</h2>
            <p className="mt-6 max-w-md font-sans text-lg">{service.explanation.heading}</p>
            {service.explanation.body.map((para) => (
              <p key={para} className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          <div>
            {groupTabs && (
              <div className="grid gap-4 sm:grid-cols-3">
                {groupTabs.items.slice(0, 3).map((item) => (
                  <Link
                    key={item.label}
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="card-elegant px-5 py-5 text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-8 rounded-xl border border-border bg-card p-7">
              <h3 className="font-sans text-sm uppercase tracking-[0.14em] text-gold">
                Important considerations
              </h3>
              <ul className="mt-5 space-y-3">
                {service.considerations.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[42px]">{service.title}</h2>
          </div>
          <Accordion items={service.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">What makes us apart</p>
        <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[40px]">
          Life &amp; Family
          <br />
          Protection
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServiceGrid.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              to="/services/$slug"
              params={{ slug: item.slug }}
              className="card-elegant px-6 py-6 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <FinalContact />
    </>
  );
}
