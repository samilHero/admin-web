'use client';

import { ThemeProvider } from '@emotion/react';

import { theme } from 'styles/theme';

export function EmotionProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
