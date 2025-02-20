import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const _24hours = 1000 * 60 * 60 * 24;

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    gcTime: _24hours,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
// export const queryClient = useQueryClient();
