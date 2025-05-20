'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { languages } from './i18n/config';
import { Search } from 'lucide-react';

const searchPlaceholders = {
  en: 'Search countries...',
  zh: '搜索国家...',
  ja: '国を検索...',
  ko: '국가 검색...',
};

export function SearchBar() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] as keyof typeof languages;
  const placeholder = searchPlaceholders[currentLang] || searchPlaceholders.en;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </form>
  );
} 