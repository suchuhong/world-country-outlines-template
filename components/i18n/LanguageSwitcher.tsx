'use client';

import { usePathname, useParams, useRouter } from 'next/navigation';
import { languages } from './config';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  
  // Get current language from the path
  const currentLang = pathname.split('/')[1];
  
  // Only proceed if currentLang is a valid language code
  if (!Object.keys(languages).includes(currentLang)) {
    return null;
  }

  // Function to switch language
  const handleLanguageSwitch = (locale: string) => {
    if (locale === currentLang) return;
    
    // Create the new path by replacing the locale prefix
    const newPath = '/' + locale + pathname.substring(currentLang.length + 1);
    
    // Set a cookie to remember the user's language preference
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
    
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(languages).map(([code, name]) => (
        <Button
          key={code}
          variant={code === currentLang ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleLanguageSwitch(code)}
          className={code === currentLang ? 'bg-sky-600' : ''}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}
