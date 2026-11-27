import { cn } from '@/lib/utils';
import { useTestimonials } from '../hooks/use-landing';
import { SectionTitle } from './section-title';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Symmetric tilt for a balanced fan: the left card leans left, the middle stays
 * straight (and sits on top), the right card leans right by the same angle. The
 * same tilt applies on mobile, where the cards pile vertically (top leans left,
 * middle straight, bottom leans right). Overlap is kept smaller than the card
 * padding so one card never covers another's text. Hover straightens the card.
 */
const TILT = [
  '-rotate-3 md:translate-y-4',
  '-mt-4 rotate-0 z-10 md:mt-0 md:-ml-5 md:-translate-y-2',
  '-mt-4 rotate-3 md:mt-0 md:-ml-5 md:translate-y-4',
];

export function TestimonialsSection() {
  const { data: testimonials = [] } = useTestimonials();

  return (
    <section
      id="success-stories"
      className="overflow-hidden bg-gray-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Success stories"
          title="Where it takes you"
          subtitle="Engineers who grew their skills — and their careers — through DSi Klubs."
          className="mb-20"
        />
        <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={cn(
                'flex w-full max-w-xs flex-col gap-4 rounded-2xl border bg-card p-8 transition-transform duration-300 hover:z-20 md:w-[320px] md:max-w-none md:hover:translate-y-0 md:hover:rotate-0',
                TILT[i],
              )}
            >
              <blockquote className="flex-1 leading-relaxed text-foreground">
                <span
                  aria-hidden
                  className="float-left mr-2 -mt-1 block h-6 font-heading text-6xl leading-none text-primary/50"
                >
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t pt-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-foreground font-heading text-sm font-semibold text-background">
                  {initials(t.name)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
