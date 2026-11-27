import { cn } from '@/lib/utils';

/**
 * Landing section heading, matching dsinnovators.com: a small "■ LABEL" eyebrow,
 * a centered solid-weight title, and a narrow centered subtitle. Set in
 * `font-heading` (Space Grotesk). Local to the landing so the rest of the app's
 * headings stay untouched for now.
 */
export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  /** Small uppercase kicker, e.g. "WHY DSI KLUBS". */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow && (
        <p className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
          <span className="size-2 rounded-[2px] bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
