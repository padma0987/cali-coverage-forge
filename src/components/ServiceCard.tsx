import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="card-elegant group flex flex-col p-7 sm:p-8"
    >
      <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} aria-hidden="true" />
      <div className="mt-14 flex items-start justify-between gap-4">
        <h3 className="text-xl">{service.title}</h3>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {service.cardDescription}
      </p>
    </Link>
  );
}
