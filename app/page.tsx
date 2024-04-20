'use client';

import type { FC } from 'react';

import { Button } from '@/components/ui/button';

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Button>Click Me</Button>
    </main>
  );
};

export default HomePage;
