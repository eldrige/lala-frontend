'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { PropsWithChildren, useState } from 'react';

import { DefaultOptions } from '@tanstack/react-query';

const _24hours = 1000 * 60 * 60 * 24;
export const defaultOptions = {
  queries: {
    // throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    gcTime: _24hours,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

function QueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient({ defaultOptions }));

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export { QueryProvider };
