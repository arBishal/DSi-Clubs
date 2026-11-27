import { STEPS } from '../landing.constants';
import { SectionTitle } from './section-title';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-gray-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="How it works"
          title="How growth happens here"
          subtitle="Three steps from joining a club to earning your credential."
          className="mb-16"
        />

        {/* Horizontal numbered flow — numbers centered per column, connected by
            a line that runs behind the nodes (first→last node centre). */}
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-0">
          <div className="absolute left-[16.67%] right-[16.67%] top-6 hidden h-px bg-gray-300 md:block" />
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.order}
                className="flex flex-col items-center px-4 text-center"
              >
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-gray-300 bg-card font-heading text-base font-bold tabular-nums text-foreground">
                  {String(step.order).padStart(2, '0')}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Icon className="size-4 text-muted-foreground" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
