'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EmotionProvider } from 'lib/EmotionProvider';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <EmotionProvider>{children}</EmotionProvider>
    </QueryClientProvider>
  );
};
