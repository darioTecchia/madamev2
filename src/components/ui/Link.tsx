'use client';

import { LoadingContext } from '@/app/provider/loading-provider';
import { default as NextLink } from 'next/link';
import { useContext } from 'react';

export default function Link(props: React.ComponentProps<typeof NextLink>) {
  const { startLoading } = useContext(LoadingContext);

  return <NextLink {...props} prefetch={false} onClick={startLoading} />;
}
