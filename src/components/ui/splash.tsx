'use client';

import HeadWithLogo from './head-with-logo';
import { LoadingContext } from '@/app/provider/loading-provider';
import { useContext } from 'react';

export default function Splash() {
  const { loading } = useContext(LoadingContext);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white ${loading ? 'cursor-wait opacity-100 duration-75' : 'pointer-events-none opacity-0'} transition-opacity duration-1000`}
    >
      <HeadWithLogo className="mb-6" />
    </div>
  );
}
