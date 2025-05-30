﻿import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getMetadata } from '@/lib/metadata';
import type { Language } from '@/components/i18n/config';

export const metadata = getMetadata('zh' as Language);

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
