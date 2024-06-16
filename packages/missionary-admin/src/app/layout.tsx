import '@styles/_global.scss';
import type { Metadata } from 'next';

import { Provider } from 'lib/Provider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: '선교 상륙 작전',
};
