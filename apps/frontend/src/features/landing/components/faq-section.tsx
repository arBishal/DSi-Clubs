import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useFaqs } from '../hooks/use-landing';
import { SectionTitle } from './section-title';

export function FaqSection() {
  const { data: faqs = [] } = useFaqs();
  // `undefined` = untouched → first question defaults open once data loads.
  const [openId, setOpenId] = useState<string | null | undefined>(undefined);
  const activeId = openId === undefined ? faqs[0]?.id : openId;

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions"
          className="mb-12"
        />
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border bg-card"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors hover:bg-muted/40"
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {/* Grid-rows trick animates the height smoothly between 0fr/1fr. */}
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
