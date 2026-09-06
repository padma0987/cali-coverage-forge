import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

const columns = [
  {
    heading: "Health/Medicare/Group",
    links: [
      { label: "Health, Medicare & Group Benefits", slug: "health-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Group Health & Employee Benefits", slug: "group-health" },
      { label: "Medicare Plans", slug: "medicare" },
    ],
  },
  {
    heading: "Life & Family Protection",
    links: [
      { label: "Life Insurance", slug: "life-insurance" },
      { label: "Indexed Universal Life (IUL)", slug: "iul" },
    ],
  },
  {
    heading: "Disability & Income Protection",
    links: [
      { label: "Disability Insurance", slug: "disability-insurance" },
      { label: "Business Owner Protection", slug: "business-owner-protection" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[15px] font-semibold">{site.name}</p>
            <p className="mt-4 max-w-[230px] text-[13px] leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="text-[13px] font-medium text-gold">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={col.heading + l.label}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: l.slug }}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-[13px] font-medium text-gold">Stay Connected</p>
            <ul className="mt-4 space-y-3 text-[13px] text-muted-foreground">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 break-all transition-colors hover:text-gold"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}.</p>
          <nav aria-label="Footer" className="flex gap-6">
            <Link to="/about" className="transition-colors hover:text-gold">
              About
            </Link>
            <Link to="/services" className="transition-colors hover:text-gold">
              Services
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
