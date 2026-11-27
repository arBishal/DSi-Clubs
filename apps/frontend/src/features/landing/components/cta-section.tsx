import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';

export function CtaSection() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      {/* Faint dot-grid texture so the band reads as a surface, not flat fill. */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:py-32">
        <p className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
          <span className="size-2 rounded-[2px] bg-primary" />
          Start growing
        </p>
        <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          Ready to start growing?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Browse the clubs, follow a path with mentors, and track every step
          from first module to certification.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/explore')}
          >
            Explore clubs
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
