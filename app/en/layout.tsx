import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '@/lib/metadata';
import type { Language } from '@/components/i18n/config';

export const metadata = getMetadata('en' as Language);

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
