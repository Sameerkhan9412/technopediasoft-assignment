import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Banner ',
  description: 'A modern blog platform with search functionality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
        <footer className="mt-20 py-8 text-center text-gray-600 text-sm border-t border-gray-200">
          <p>Blog Banner App</p>
        </footer>
      </body>
    </html>
  );
}