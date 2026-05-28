import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ramesh Portfolio + LMS',
  description: 'A portfolio website with an integrated learning management system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <div className="container header-inner">
              <a href="/" className="brand">
                Ramesh
              </a>
              <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="/lms">Courses</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container">Built with Next.js · Portfolio + LMS</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
