const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <body>
      <div>
        <main>{children}</main>
      </div>
    </body>
  </html>
);

export default RootLayout;
