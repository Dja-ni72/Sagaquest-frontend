import './globals.css';

export const metadata = {
  title: 'Saga Quest',
  description: 'Welcome to Saga Quest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
