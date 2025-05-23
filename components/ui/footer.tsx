"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeIcon, Github, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];
  
  // 多语言文本内容
  const content = {
    en: {
      siteTitle: 'Country Outlines',
      description: 'High-quality country outline map resources for designers, data analysts, and educators.',
      quickLinks: 'Quick Links',
      home: 'Home',
      countries: 'Country Index',
      formats: 'Format Info',
      about: 'About Us',
      resources: 'Resources',
      asia: 'Asian Countries',
      europe: 'European Countries',
      america: 'American Countries',
      africa: 'African Countries',
      oceania: 'Oceanian Countries',
      otherInfo: 'Other Information',
      license: 'License Info',
      attribution: 'Data Sources',
      faq: 'FAQ',
      contact: 'Contact Us',
      copyright: '© {year} Country Outlines Resource. Licensed under',
      ccLicense: 'CC BY 4.0'
    },
    zh: {
      siteTitle: '国家轮廓图',
      description: '为设计师、数据分析师和教育工作者提供高质量的国家轮廓地图资源。',
      quickLinks: '快速链接',
      home: '首页',
      countries: '国家索引',
      formats: '格式说明',
      about: '关于我们',
      resources: '资源分类',
      asia: '亚洲国家',
      europe: '欧洲国家',
      america: '美洲国家',
      africa: '非洲国家',
      oceania: '大洋洲国家',
      otherInfo: '其他信息',
      license: '许可说明',
      attribution: '数据来源',
      faq: '常见问题',
      contact: '联系我们',
      copyright: '© {year} 国家轮廓图资源网. 基于',
      ccLicense: 'CC BY 4.0'
    },
    ja: {
      siteTitle: '国境線マップ',
      description: 'デザイナー、データアナリスト、教育者向けの高品質な国境線マップリソース。',
      quickLinks: 'クイックリンク',
      home: 'ホーム',
      countries: '国別インデックス',
      formats: 'フォーマット情報',
      about: 'サイトについて',
      resources: 'リソース',
      asia: 'アジア諸国',
      europe: 'ヨーロッパ諸国',
      america: 'アメリカ諸国',
      africa: 'アフリカ諸国',
      oceania: 'オセアニア諸国',
      otherInfo: 'その他の情報',
      license: 'ライセンス情報',
      attribution: 'データソース',
      faq: 'よくある質問',
      contact: 'お問い合わせ',
      copyright: '© {year} 国境線マップリソース. ライセンス:',
      ccLicense: 'CC BY 4.0'
    },
    ko: {
      siteTitle: '국가 윤곽도',
      description: '디자이너, 데이터 분석가, 교육자를 위한 고품질 국가 윤곽 지도 리소스입니다.',
      quickLinks: '퀵 링크',
      home: '홈',
      countries: '국가 색인',
      formats: '형식 정보',
      about: '소개',
      resources: '리소스',
      asia: '아시아 국가',
      europe: '유럽 국가',
      america: '아메리카 국가',
      africa: '아프리카 국가',
      oceania: '오세아니아 국가',
      otherInfo: '기타 정보',
      license: '라이선스 정보',
      attribution: '데이터 소스',
      faq: '자주 묻는 질문',
      contact: '문의하기',
      copyright: '© {year} 국가 윤곽도 리소스. 라이선스:',
      ccLicense: 'CC BY 4.0'
    }
  };
  
  const t = content[currentLang as keyof typeof content] || content.en;
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <GlobeIcon className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-heading font-bold text-primary-600">{t.siteTitle}</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-500 hover:text-primary-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-500 hover:text-primary-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link href={`/${currentLang}`} className="text-sm text-gray-600 hover:text-primary-600">{t.home}</Link></li>
              <li><Link href={`/${currentLang}/countries`} className="text-sm text-gray-600 hover:text-primary-600">{t.countries}</Link></li>
              <li><Link href={`/${currentLang}/formats`} className="text-sm text-gray-600 hover:text-primary-600">{t.formats}</Link></li>
              <li><Link href={`/${currentLang}/about`} className="text-sm text-gray-600 hover:text-primary-600">{t.about}</Link></li>
            </ul>
          </div>
          
          <div className="sm:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">{t.resources}</h3>
            <ul className="space-y-3">
              <li><Link href={`/${currentLang}/continent/asia`} className="text-sm text-gray-600 hover:text-primary-600">{t.asia}</Link></li>
              <li><Link href={`/${currentLang}/continent/europe`} className="text-sm text-gray-600 hover:text-primary-600">{t.europe}</Link></li>
              <li><Link href={`/${currentLang}/continent/america`} className="text-sm text-gray-600 hover:text-primary-600">{t.america}</Link></li>
              <li><Link href={`/${currentLang}/continent/africa`} className="text-sm text-gray-600 hover:text-primary-600">{t.africa}</Link></li>
              <li><Link href={`/${currentLang}/continent/oceania`} className="text-sm text-gray-600 hover:text-primary-600">{t.oceania}</Link></li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">{t.otherInfo}</h3>
            <ul className="space-y-3">
              <li><Link href={`/${currentLang}/license`} className="text-sm text-gray-600 hover:text-primary-600">{t.license}</Link></li>
              <li><Link href={`/${currentLang}/attribution`} className="text-sm text-gray-600 hover:text-primary-600">{t.attribution}</Link></li>
              <li><Link href={`/${currentLang}/faq`} className="text-sm text-gray-600 hover:text-primary-600">{t.faq}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="text-sm text-gray-600 hover:text-primary-600">{t.contact}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            {t.copyright.replace('{year}', currentYear.toString())} <a href="https://creativecommons.org/licenses/by/4.0/" className="text-primary-600 hover:underline">{t.ccLicense}</a> {currentLang === 'zh' ? '许可.' : currentLang === 'ja' ? 'ライセンス.' : 'license.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
