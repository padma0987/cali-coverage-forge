import { trustItems } from "@/data/site";

export function TrustStrip() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-y-10 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.title} className="pr-6">
            <p className="font-display text-2xl sm:text-[26px]">{item.title}</p>
            <p className="mt-1.5 text-[13px] text-muted-foreground">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
