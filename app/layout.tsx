import './globals.css';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { baseMetadata } from './seo';

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '国家轮廓图资源网',
              url: 'https://www.countryoutlines.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.countryoutlines.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
