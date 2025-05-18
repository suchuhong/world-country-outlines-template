import Link from 'next/link';
import { GlobeIcon, Github, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GlobeIcon className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-heading font-bold text-primary-600">国家轮廓图</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              为设计师、数据分析师和教育工作者提供高质量的国家轮廓地图资源。
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
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-primary-600">首页</Link></li>
              <li><Link href="/countries" className="text-sm text-gray-600 hover:text-primary-600">国家索引</Link></li>
              <li><Link href="/formats" className="text-sm text-gray-600 hover:text-primary-600">格式说明</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary-600">关于我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">资源分类</h3>
            <ul className="space-y-3">
              <li><Link href="/continent/asia" className="text-sm text-gray-600 hover:text-primary-600">亚洲国家</Link></li>
              <li><Link href="/continent/europe" className="text-sm text-gray-600 hover:text-primary-600">欧洲国家</Link></li>
              <li><Link href="/continent/america" className="text-sm text-gray-600 hover:text-primary-600">美洲国家</Link></li>
              <li><Link href="/continent/africa" className="text-sm text-gray-600 hover:text-primary-600">非洲国家</Link></li>
              <li><Link href="/continent/oceania" className="text-sm text-gray-600 hover:text-primary-600">大洋洲国家</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">其他信息</h3>
            <ul className="space-y-3">
              <li><Link href="/license" className="text-sm text-gray-600 hover:text-primary-600">许可说明</Link></li>
              <li><Link href="/attribution" className="text-sm text-gray-600 hover:text-primary-600">数据来源</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-primary-600">常见问题</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600">联系我们</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} 国家轮廓图资源网. 基于 <a href="https://creativecommons.org/licenses/by/4.0/" className="text-primary-600 hover:underline">CC BY 4.0</a> 许可.
          </p>
        </div>
      </div>
    </footer>
  );
}
