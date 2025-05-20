import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '@/lib/metadata';
import type { Language } from '@/components/i18n/config';

export const metadata = getMetadata('ko' as Language);

export default function KoreanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 