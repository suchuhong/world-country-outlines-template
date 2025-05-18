import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '../seo';

export const metadata = getMetadata('en');

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
