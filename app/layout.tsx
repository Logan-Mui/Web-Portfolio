import Header from './_components/header';
import dynamic from 'next/dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
          <Header/>
          <main>{children}</main>
        </body>
    </html>
  )
}