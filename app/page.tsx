'use client';

import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import Logo from '@/public/svg/logo.svg';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 py-12 text-center">
      <Logo className="h-20" />
      <h1 className="mt-6 text-lg font-bold">Next.js Starter Template</h1>
      <p className="text-justify">
        NextJS + Tailwind CSS + TypeScript + ShadCN/UI starter packed with
        useful development features.
      </p>
      <p className="text-sm text-gray-700">
        <Link href="https://github.com/anish-u/nextjs-starter-template">
          <Button variant="default">See the repository</Button>
        </Link>
      </p>

      <footer className="absolute bottom-2">
        <Link href="https://uanish.me">
          <Button variant="secondary">
            © {new Date().getFullYear()} Anish Ummenthala
          </Button>
        </Link>
      </footer>
    </main>
  );
};

export default HomePage;
