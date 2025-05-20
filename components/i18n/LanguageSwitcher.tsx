'use client';

import { usePathname, useParams, useRouter } from 'next/navigation';
import { languages } from './config';
import { Button } from '@/components/ui/button';
import { GlobeIcon, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <GlobeIcon className="h-4 w-4" />
          <span>{languages[currentLang as keyof typeof languages]}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageSwitch(code)}
            className={code === currentLang ? 'bg-accent-50 text-accent-900' : ''}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
