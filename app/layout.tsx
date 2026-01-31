export const metadata = {
  title: 'Legal Consultation',
  description: 'Business & Legal Services'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ padding: '15px', background: '#0f172a', color: '#fff' }}>
          <h2>Legal Consultation</h2>
          <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="/" style={{ color: '#fff' }}>Home</a>
            <a href="/about" style={{ color: '#fff' }}>About</a>
            <a href="/services" style={{ color: '#fff' }}>Services</a>
            <a href="/contact" style={{ color: '#fff' }}>Contact</a>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>{children}</main>

        <footer style={{ padding: '15px', background: '#e5e7eb', textAlign: 'center' }}>
          © 2026 Legal Consultation. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
