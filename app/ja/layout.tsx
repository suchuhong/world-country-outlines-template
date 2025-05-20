import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '../seo';

export const metadata = getMetadata('ja');

export default function JapaneseLayout({
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