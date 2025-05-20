import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '@/lib/metadata';

export const metadata = getMetadata('ko');

export default function KoreanLayout({
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