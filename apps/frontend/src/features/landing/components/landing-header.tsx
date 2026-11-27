import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router';

import { BrandLogo } from '@/components/layout/brand-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LandingHeaderProps {
  /** Hides the Login button on pages where it's redundant (e.g. login). */
  showLogin?: boolean;
  /** Shows the notification bell on authenticated pages (e.g. dashboard). */
  showNotifications?: boolean;
  /**
   * Landing mode: the header is fixed and full-width, transparent (white text)
   * while over the hero, then switches to a frosted background once scrolled
   * past the hero. Used so the nav and hero read as one full-height unit.
   */
  transparent?: boolean;
}

export function LandingHeader({
  showLogin = true,
  showNotifications = false,
  transparent = false,
}: LandingHeaderProps) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => {
      // Frost as soon as scrolling starts; go solid white past the hero.
      setScrolled(window.scrollY > 8);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  // Three states over the hero: transparent → frosted → solid white.
  const overHero = transparent && !scrolled;
  const frosted = transparent && scrolled && !pastHero;
  const solid = transparent && pastHero;

  return (
    <header
      className={cn(
        'z-50 w-full transition-colors duration-300',
        transparent
          ? 'fixed inset-x-0 top-0'
          : 'sticky top-0 border-b bg-background/90 backdrop-blur-md',
        overHero && 'text-white',
        frosted && 'bg-white/10 text-white backdrop-blur-md',
        solid && 'border-b bg-background/70 text-foreground backdrop-blur-md',
      )}
    >
      <div
        className={cn(
          'flex w-full items-center justify-between py-5',
          transparent ? 'px-10' : 'mx-auto max-w-6xl px-6',
        )}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex h-11 items-center md:h-auto"
        >
          <BrandLogo />
        </button>
        <div className="flex items-center gap-2">
          {showNotifications && (
            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-full p-3 transition-colors hover:bg-muted md:p-2"
            >
              <Bell className="size-5" />
              <span className="absolute right-3 top-3 size-2 rounded-full bg-destructive md:right-2 md:top-2" />
            </button>
          )}
          {showLogin && (
            <Button
              variant={solid ? 'default' : 'secondary'}
              className="h-11 px-5 md:h-9"
              onClick={() => navigate('/login')}
            >
              Start growing
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
