import {
  Award,
  BadgeCheck,
  Network,
  Search,
  Terminal,
  Users,
} from 'lucide-react';

import type { Benefit, Step } from './landing.types';

export const HERO = {
  title: 'Skill growth, built into the team',
  subtitle:
    'DSi Clubs give every engineer a clear path to learn new stacks, work with senior mentors, and track real progress — from first module to certification.',
  primaryCta: 'Explore our culture',
  secondaryCta: 'See How It Works',
} as const;

export const BENEFITS: Benefit[] = [
  {
    title: 'Structured Learning',
    description:
      'Step-by-step curriculum that takes you from foundational concepts to advanced systems architecture.',
    icon: Network,
    tag: 'Curriculum',
  },
  {
    title: 'Certifications',
    description:
      'Earn recognized badges that validate your technical expertise and contribution to the DSi community.',
    icon: BadgeCheck,
    tag: 'Credentials',
  },
  {
    title: 'Mentors',
    description:
      'Direct access to senior engineers for code reviews, architectural feedback, and career guidance.',
    icon: Users,
    tag: 'Mentorship',
  },
  {
    title: 'Real Projects',
    description:
      'Collaborate on tools that mirror production environments and real scalability challenges.',
    icon: Terminal,
    tag: 'Hands-on',
  },
];

export const STEPS: Step[] = [
  {
    order: 1,
    title: 'Browse & select',
    description:
      'Find the learning path that fits your goals. Explore curriculums, meet the leads, and preview upcoming cohorts.',
    icon: Search,
  },
  {
    order: 2,
    title: 'Learn with your cohort',
    description:
      'Join peer cohorts and hands-on labs. Weekly syncs, deep-dive discussions, and real collaborative work.',
    icon: Users,
  },
  {
    order: 3,
    title: 'Get certified',
    description:
      'Complete the final challenge, present your solution to senior mentors, and earn your credential.',
    icon: Award,
  },
];
