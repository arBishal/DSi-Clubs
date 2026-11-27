import { BENEFITS } from '../landing.constants';

export function BenefitsSection() {
  return (
    <section id="why-klubs" className="bg-gray-50 py-24 lg:py-32">
      <div className="px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left: title block */}
          <div className="lg:col-span-1">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              <span className="size-2 rounded-[2px] bg-primary" />
              Why DSi Klubs
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Everything a growing engineer needs
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              One place to learn, get reviewed, and prove how far you've come.
            </p>
          </div>

          {/* Right: 2x2 card grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group flex flex-col justify-between rounded-xl border bg-card p-6 transition-colors hover:border-foreground/30"
                >
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-2.5">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                      <Icon className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {benefit.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
