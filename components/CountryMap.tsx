'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { languages } from './i18n/config';

const countryNames = {
  en: {
    title: 'World Map',
    download: 'Download',
    search: 'Search countries...',
  },
  zh: {
    title: '世界地图',
    download: '下载',
    search: '搜索国家...',
  },
  ja: {
    title: '世界地図',
    download: 'ダウンロード',
    search: '国を検索...',
  },
  ko: {
    title: '세계 지도',
    download: '다운로드',
    search: '국가 검색...',
  },
};

export function CountryMap() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] as keyof typeof languages;
  const t = countryNames[currentLang] || countryNames.en;
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
        <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map visualization will be implemented here</p>
        </div>
        {selectedCountry && (
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={() => {
                // Download functionality will be implemented here
                console.log('Downloading:', selectedCountry);
              }}
            >
              {t.download}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 