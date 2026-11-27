import type { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Short label shown beside the icon in the card footer. */
  tag: string;
}

export interface Step {
  order: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Club {
  id: string;
  name: string;
  blurb: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}
