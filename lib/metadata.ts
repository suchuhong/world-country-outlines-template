import { Metadata } from 'next';
import { Language } from '@/components/i18n/config';

const metadata: Record<Language, Metadata> = {
  en: {
    title: 'World Country Outlines',
    description: 'Explore and download high-quality SVG country outlines',
  },
  zh: {
    title: '世界国家轮廓',
    description: '探索并下载高质量SVG国家轮廓',
  },
  ja: {
    title: '世界の国境線',
    description: '高品質なSVG国境線を探索してダウンロード',
  },
  ko: {
    title: '세계 국가 윤곽선',
    description: '고품질 SVG 국가 윤곽선을 탐색하고 다운로드하세요',
  },
};

export function getMetadata(locale: Language): Metadata {
  return metadata[locale];
} 