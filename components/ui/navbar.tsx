import Link from 'next/link';
import { GlobeIcon } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobeIcon className="h-6 w-6 text-primary-600" />
          <Link href="/" className="text-lg font-heading font-bold">
            <span className="text-primary-600">国家轮廓图</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            首页
          </Link>
          <Link href="/countries" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            国家索引
          </Link>
          <Link href="/formats" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            下载说明
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
            关于我们
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2 text-gray-700 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
