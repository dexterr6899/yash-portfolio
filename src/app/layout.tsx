import { ReactNode } from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './globals.css'; // Import global CSS

type LayoutProps = {
  children: ReactNode;
};

type Props = {
	children: ReactNode;
	activeKey: number;
  };

export default function RootLayout({ children, activeKey }: Props ) {
  return (
    <html lang="en">
      <body>
        <Header activeKey={activeKey}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
