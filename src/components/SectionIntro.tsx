import type { ReactNode } from "react";

export function SectionIntro({
  eyebrow,
  heading,
  body,
  children,
}: {
  eyebrow: string;
  heading: ReactNode;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[42px]">{heading}</h2>
      </div>
      <div className="self-end">
        {body && <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>}
        {children}
      </div>
    </div>
  );
}
