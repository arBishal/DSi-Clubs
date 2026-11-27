import { GitBranch, Globe, Mail } from 'lucide-react';

import { BrandLogo } from '@/components/layout/brand-logo';

const COLUMNS = [
  { title: 'Platform', links: ['Browse', 'Stories', 'How it works'] },
  { title: 'Support', links: ['FAQ', 'Privacy', 'Terms'] },
  { title: 'Community', links: ['Discord', 'GitHub'] },
];

export function LandingFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <BrandLogo />
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              Helping DSi engineers grow their skills through structured clubs,
              mentorship, and tracked progress.
            </p>
            <div className="flex gap-5 text-muted-foreground">
              <Globe className="size-5 cursor-pointer transition-colors hover:text-foreground" />
              <GitBranch className="size-5 cursor-pointer transition-colors hover:text-foreground" />
              <Mail className="size-5 cursor-pointer transition-colors hover:text-foreground" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h5 className="mb-4 text-sm font-semibold text-foreground">
                  {col.title}
                </h5>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <div>© 2026 DSi Klubs. All rights reserved.</div>
          <div>Built for engineers, by engineers.</div>
        </div>
      </div>
    </footer>
  );
}
