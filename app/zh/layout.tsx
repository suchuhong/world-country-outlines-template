import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '../seo';

export const metadata = getMetadata('zh');

export default function ChineseLayout({
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
