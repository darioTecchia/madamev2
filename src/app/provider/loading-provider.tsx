'use client';

import { createContext, useState } from 'react';

export const LoadingContext = createContext<{
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}>({
  loading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    console.log('Loading started');

    setLoading(true);

    setTimeout(stopLoading, 1000);
  };

  const stopLoading = () => {
    console.log('Loading stopped');

    setLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        startLoading,
        stopLoading,
        loading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
