import { Metadata } from 'next';
import { Language } from '@/components/i18n/config';

const metadata: Record<Language, Metadata> = {
  en: {
    title: 'World Country Outlines',
    description: 'High-quality SVG, EPS, PNG country outlines for 200+ countries. Free download for design and visualization.',
  },
  zh: {
    title: '世界国家轮廓',
    description: '200+国家和地区SVG、EPS、PNG高质量轮廓图，免费下载，适用于设计和可视化。',
  },
  ja: {
    title: '世界の国境線',
    description: '200以上の国と地域の高品質なSVG・EPS・PNG輪郭地図。無料ダウンロード。',
  },
  ko: {
    title: '세계 국가 윤곽선',
    description: '200개 이상의 국가 SVG, EPS, PNG 윤곽도. 무료 다운로드, 디자인과 시각화에 적합.',
  },
};

export function getMetadata(locale: Language): Metadata {
  return metadata[locale];
} 