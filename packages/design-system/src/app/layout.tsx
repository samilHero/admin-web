const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
