import { ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HERO } from '../landing.constants';
import { useStats } from '../hooks/use-landing';

export function HeroSection() {
  const { data: stats = [] } = useStats();

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-gray-950 text-white">
      {/* Full-bleed photo with a scrim for legibility — the fixed nav sits on top. */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.webp"
          alt="Engineers collaborating at DSi"
          className="size-full object-cover object-center"
        />
        {/* Accent tint over the photo, then a dark scrim for text legibility. */}
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      {/* Everything anchored to the bottom-left. */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-end px-12 py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {HERO.subtitle}
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <a href="#why-klubs">
                {HERO.primaryCta}
                <ArrowDown className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <dl className="mt-24 flex flex-wrap gap-x-14 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="font-heading text-4xl font-bold tracking-tight tabular-nums sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs font-medium uppercase text-white/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
