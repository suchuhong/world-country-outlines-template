import type { Metadata } from 'next';

// 基本元数据配置
export const baseMetadata: Metadata = {
  title: {
    template: '%s',
    default: '国家轮廓图资源网 - 高质量SVG国家边界',
  },
  description: '免费提供200+国家和地区的SVG、EPS和PNG格式高质量轮廓图，适用于设计、数据可视化与教育',
  keywords: ['国家轮廓', '地图资源', 'SVG地图', '国家边界', '矢量地图'],
  authors: [{ name: '国家轮廓图资源网团队' }],
  creator: '国家轮廓图资源网',
  publisher: '国家轮廓图资源网',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.countryoutlines.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: '国家轮廓图资源网 - 高质量SVG国家边界',
    description: '免费提供200+国家和地区的SVG、EPS和PNG格式高质量轮廓图，适用于设计、数据可视化与教育',
    url: 'https://www.countryoutlines.com',
    siteName: '国家轮廓图资源网',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '国家轮廓图资源网 - 全球国家轮廓地图一站式下载',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '国家轮廓图资源网 - 高质量SVG国家边界',
    description: '免费提供200+国家和地区的SVG、EPS和PNG格式高质量轮廓图',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'geography',
};

// 根据语言获取元数据
export function getMetadata(lang: 'zh' | 'en'): Metadata {
  if (lang === 'en') {
    return {
      ...baseMetadata,
      title: {
        template: '%s | Country Outlines Resource',
        default: 'Country Outlines Resource - High Quality SVG Country Borders',
      },
      description: 'Free high-quality outline maps of 200+ countries and regions in SVG, EPS and PNG formats for design, data visualization and education',
      keywords: ['country outlines', 'map resources', 'SVG maps', 'country borders', 'vector maps'],
      authors: [{ name: 'Country Outlines Resource Team' }],
      creator: 'Country Outlines Resource',
      publisher: 'Country Outlines Resource',
      alternates: {
        canonical: '/en',
        languages: {
          'zh-CN': '/zh',
          'en-US': '/en',
        },
      },
      openGraph: {
        ...baseMetadata.openGraph,
        title: 'Country Outlines Resource - High Quality SVG Country Borders',
        description: 'Free high-quality outline maps of 200+ countries and regions in SVG, EPS and PNG formats',
        locale: 'en_US',
      },
      twitter: {
        ...baseMetadata.twitter,
        title: 'Country Outlines Resource - High Quality SVG Country Borders',
        description: 'Free high-quality outline maps of 200+ countries and regions in SVG, EPS and PNG formats',
      },
    };
  }
  
  return baseMetadata;
}
