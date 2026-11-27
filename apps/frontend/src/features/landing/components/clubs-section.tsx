import {
  ArrowRight,
  Code2,
  Coffee,
  Cpu,
  Server,
  Shield,
  Smartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { useClubs } from '../hooks/use-landing';

/** Icon per club id — keeps the cards image-free and consistent. */
const CLUB_ICONS: Record<string, LucideIcon> = {
  frontend: Code2,
  java: Coffee,
  devops: Server,
  security: Shield,
  data: Cpu,
  mobile: Smartphone,
};

export function ClubsSection() {
  const navigate = useNavigate();
  const { data: clubs = [], isLoading } = useClubs();

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left: card grid */}
          <div className="order-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:order-1 lg:col-span-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-56 animate-pulse rounded-xl bg-card"
                  />
                ))
              : clubs.map((club) => {
                  const Icon = CLUB_ICONS[club.id] ?? Code2;
                  return (
                    <button
                      key={club.id}
                      type="button"
                      onClick={() => navigate('/explore')}
                      className="group flex flex-col items-start rounded-xl border bg-card p-8 text-left transition-colors hover:border-foreground/30"
                    >
                      <Icon
                        className="size-8 text-foreground"
                        strokeWidth={1.5}
                      />
                      <h3 className="mt-12 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                        {club.name}
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {club.blurb}
                      </p>
                    </button>
                  );
                })}
          </div>

          {/* Right: title block + CTA */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              <span className="size-2 rounded-[2px] bg-primary" />
              The Klubs
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Find your club
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A focused path for every engineering discipline.
            </p>
            <Button
              variant="link"
              className="mt-8 h-auto p-0 text-foreground"
              onClick={() => navigate('/explore')}
            >
              Browse all clubs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
