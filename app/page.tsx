'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLanguage } from '@/components/i18n/config';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Get the browser language
    const userLang = 
      typeof window !== 'undefined' && navigator.language
        ? navigator.language.split('-')[0]
        : defaultLanguage;
        
    // Check if the language is supported
    const lang = ['en', 'zh'].includes(userLang) ? userLang : defaultLanguage;
    
    // Redirect to the appropriate language version
    router.push(`/${lang}`);
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}
