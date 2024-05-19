import '@styles/_global.scss';
import type { Metadata } from 'next';

import { EmotionProvider } from '../lib/EmotionProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <EmotionProvider>
        <body>{children}</body>
      </EmotionProvider>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: '선교 상륙 작전',
};
