import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { FaqItem } from "@/data/faqs";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={`${baseId}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`font-sans text-[15px] transition-colors ${
                    isOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="mt-1 h-4 w-4 shrink-0 text-gold" />
                ) : (
                  <Plus className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </button>
            </h3>
            <div
              id={`${baseId}-panel-${i}`}
              role="region"
              aria-labelledby={`${baseId}-btn-${i}`}
              hidden={!isOpen}
            >
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
