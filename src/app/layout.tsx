import { Footer, Navbar } from '@/components';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Carlos Dev',
  description: 'Generated by Carlos Dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
