import { ReactNode } from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './globals.css'; // Import global CSS

type Props = {
	children: ReactNode;
	activeKey: number;
  };

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
