"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeIcon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 当菜单打开时，禁止背景滚动
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // 菜单项配置 - 基于当前语言
  const menuItems = {
    en: [
      { href: '/en', label: 'Home' },
      { href: '/en/countries', label: 'Country Index' },
      { href: '/en/formats', label: 'Download Info' },
      { href: '/en/about', label: 'About Us' },
    ],
    zh: [
      { href: '/zh', label: '首页' },
      { href: '/zh/countries', label: '国家索引' },
      { href: '/zh/formats', label: '下载说明' },
      { href: '/zh/about', label: '关于我们' },
    ],
    ja: [
      { href: '/ja', label: 'ホーム' },
      { href: '/ja/countries', label: '国別インデックス' },
      { href: '/ja/formats', label: 'ダウンロード情報' },
      { href: '/ja/about', label: 'サイトについて' },
    ]
  };

  const currentMenuItems = menuItems[currentLang as keyof typeof menuItems] || menuItems.en;

  // 网站标题
  const siteTitles = {
    en: 'Country Outlines',
    zh: '国家轮廓图',
    ja: '国境線マップ'
  };

  // 菜单按钮文本
  const menuButtonLabels = {
    en: { open: 'Open Menu', close: 'Close Menu' },
    zh: { open: '打开菜单', close: '关闭菜单' },
    ja: { open: 'メニューを開く', close: 'メニューを閉じる' }
  };

  // 搜索框占位符
  const searchPlaceholders = {
    en: 'Enter country or ISO code...',
    zh: '输入国家或 ISO 代码...',
    ja: '国名またはISOコードを入力...'
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobeIcon className="h-6 w-6 text-primary-600" />
          <Link href={`/${currentLang}`} className="text-lg font-heading font-bold">
            <span className="text-primary-600">
              {siteTitles[currentLang as keyof typeof siteTitles] || siteTitles.en}
            </span>
          </Link>
        </div>
        
        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {currentMenuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>
        
        {/* 移动端汉堡菜单按钮 */}
        <div className="flex items-center md:hidden">
          <div className="mr-4">
            <LanguageSwitcher />
          </div>
          <button 
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? menuButtonLabels[currentLang as keyof typeof menuButtonLabels]?.close : menuButtonLabels[currentLang as keyof typeof menuButtonLabels]?.open}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out", 
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '64px' }} // 保留导航栏高度
      >
        <nav className="container-custom py-6 flex flex-col space-y-6">
          {currentMenuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-lg font-medium text-gray-800 hover:text-primary-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu} // 点击链接后关闭菜单
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-6 mt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {currentLang === 'en' ? 'Quick Search' : currentLang === 'zh' ? '快速搜索' : 'クイック検索'}
            </p>
            <div className="relative">
              <input
                type="search"
                placeholder={searchPlaceholders[currentLang as keyof typeof searchPlaceholders] || searchPlaceholders.en}
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
