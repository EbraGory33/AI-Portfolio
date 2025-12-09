'use client';

import { Suspense } from 'react';

import Overview from '@/components/overview/overview';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading info...</div>}>
      <Overview />
    </Suspense>
  );
}
