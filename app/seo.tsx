import { Metadata } from 'next';

// 基础元数据
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.countryoutlines.com'), // 请替换为实际网站URL
  title: {
    default: '全球国家轮廓地图SVG下载 | 高质量矢量地图资源',
    template: '%s | 国家轮廓图资源网'
  },
  description: '免费下载200+国家和地区的高质量SVG轮廓地图，用于网页设计、数据可视化、PowerBI和教育演示。',
  keywords: ['国家轮廓图', 'SVG地图', '矢量地图', '地图下载', '国家边界图', '世界地图素材'],
  authors: [{ name: '国家轮廓图资源网团队' }],
  creator: '国家轮廓图资源网',
  publisher: '国家轮廓图资源网',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.countryoutlines.com',
    siteName: '国家轮廓图资源网',
    title: '全球国家轮廓地图SVG下载 | 高质量矢量地图资源',
    description: '免费下载200+国家和地区的高质量SVG轮廓地图，用于网页设计、数据可视化和教育演示。',
    images: [
      {
        url: 'https://www.countryoutlines.com/og-image.jpg', // 请替换为实际图片URL
        width: 1200,
        height: 630,
        alt: '国家轮廓图资源网预览图',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全球国家轮廓地图SVG下载 | 高质量矢量地图资源',
    description: '免费下载200+国家和地区的高质量SVG轮廓地图，用于网页设计、数据可视化和教育演示。',
    images: ['https://www.countryoutlines.com/twitter-image.jpg'], // 请替换为实际图片URL
    creator: '@countryoutlines', // 请替换为实际Twitter账号
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code', // 请替换为实际验证码
    yandex: 'yandex-verification-code', // 如需要
    baidu: 'baidu-site-verification-code', // 如需要
  },
  alternates: {
    canonical: 'https://www.countryoutlines.com',
    languages: {
      'en-US': 'https://www.countryoutlines.com/en',
      'zh-CN': 'https://www.countryoutlines.com',
    },
  },
};

// 辅助函数 - 生成特定国家页面的元数据
export function generateCountryMetadata(country: { name: string, code: string, continent: string }): Metadata {
  const title = `${country.name}轮廓地图下载 | SVG、EPS和PNG格式`;
  const description = `免费下载高质量${country.name}轮廓地图SVG矢量图，适用于网页设计、数据可视化、PowerBI和教育演示。`;
  return {
    title,
    description,
    keywords: [`${country.name}轮廓图`, `${country.name}地图`, `${country.name}边界图`, `${country.code}地图`, '矢量地图', 'SVG地图'],
    alternates: {
      canonical: `https://www.countryoutlines.com/country/${country.code.toLowerCase()}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.countryoutlines.com/country/${country.code.toLowerCase()}`,
      images: [{
        url: `https://www.countryoutlines.com/maps/${country.code.toLowerCase()}-outline-preview.jpg`,
        width: 1200,
        height: 630,
        alt: `${country.name}轮廓地图预览`,
      }],
    },
  };
}
