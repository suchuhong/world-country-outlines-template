import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadIcon, ArrowLeftIcon, GlobeIcon } from 'lucide-react';
import SvgPreview from '@/components/SvgPreview';
import { promises as fs } from 'fs';
import path from 'path';

// 这里仅作演示用途，实际中应该从数据库或API获取
const countryData = {
  USA: { name: '美国', code: 'USA', continent: '北美洲', image: '/maps/usa-outline.svg' },
  CHN: { name: '中国', code: 'CHN', continent: '亚洲', image: '/maps/china-outline.svg' },
  // ... 其他国家
};

// 动态生成元数据
export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const code = resolvedParams.code.toUpperCase();
  const country = countryData[code as keyof typeof countryData];
  
  if (!country) {
    return {
      title: '国家未找到',
      description: '您请求的国家轮廓图不存在或已移除。',
    };
  }
  
  return {
    title: `${country.name}轮廓地图 - 免费SVG下载`,
    description: `免费提供高质量${country.name}矢量轮廓地图，支持SVG、EPS和PNG格式，适用于网页设计、数据可视化等项目。`,
    keywords: [`${country.name}轮廓`, `${country.name}地图`, `${country.name}矢量`, `${country.name}边界`, `${country.code}地图`],
    alternates: {
      canonical: `/zh/country/${resolvedParams.code.toLowerCase()}`,
      languages: {
        'zh-CN': `/zh/country/${resolvedParams.code.toLowerCase()}`,
        'en-US': `/en/country/${resolvedParams.code.toLowerCase()}`,
      },
    },
  };
}

interface CountryPageProps {
  params: Promise<{ code: string }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params;
  const code = resolvedParams.code.toUpperCase();
  const country = countryData[code as keyof typeof countryData];
  
  if (!country) {
    return (
      <div className="container-custom section-padding text-center">
        <h1 className="text-3xl font-bold mb-6">国家未找到</h1>
        <p className="mb-8">抱歉，您请求的国家轮廓图不存在或已移除。</p>
        <Button asChild>
          <Link href="/zh">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> 返回首页
          </Link>
        </Button>
      </div>
    );
  }
  
  // 读取SVG文件内容
  const svgPath = path.join(process.cwd(), 'public', country.image);
  const svgContent = await fs.readFile(svgPath, 'utf-8');
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: `${country.name}轮廓地图`,
    description: `${country.name}高质量SVG矢量轮廓地图，可用于网页设计、数据可视化等项目。`,
    contentUrl: `https://www.countryoutlines.com/maps/${country.code.toLowerCase()}-outline.svg`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    acquireLicensePage: 'https://www.countryoutlines.com/license',
    creditText: '国家轮廓图资源网'
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex" aria-label="面包屑导航">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/zh" className="hover:text-primary-600">首页</Link></li>
              <li><span className="px-2">/</span></li>
              <li><Link href="/zh/countries" className="hover:text-primary-600">国家索引</Link></li>
              <li><span className="px-2">/</span></li>
              <li><Link href={`/zh/continent/${country.continent.toLowerCase()}`} className="hover:text-primary-600">{country.continent}</Link></li>
              <li><span className="px-2">/</span></li>
              <li className="font-medium text-primary-600">{country.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <section className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 bg-gray-50 flex items-center justify-center h-[400px]">
              <SvgPreview
                svgContent={svgContent}
                width={400}
                height={400}
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold">{country.name}轮廓地图</h1>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                {country.code}
              </span>
            </div>
            
            <p className="text-gray-700 mb-8">
              高质量{country.name}矢量轮廓地图，可用于网页设计、数据可视化、PowerBI报表、教育演示与印刷制图。所有格式均支持透明背景，可随意调整颜色与大小。
            </p>
            
            <h2 className="text-xl font-semibold mb-4">可用下载格式</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-primary-600 hover:bg-primary-700" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline.svg`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> SVG矢量格式
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline.eps`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> EPS矢量格式
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline-4k.png`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> PNG - 4K高清
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline-hd.png`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> PNG - HD标清
                </a>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 flex items-center">
              <GlobeIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                数据来源：Natural Earth • 使用<Link href="/zh/license" className="text-primary-600 hover:underline"> CC BY 4.0 </Link>授权，可免费用于个人和商业项目
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">相关国家轮廓图</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* 这里应该是根据地理位置或其他关系推荐的国家 */}
            {/* 示例卡片 */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="p-0 bg-gray-50">
                <div className="relative pt-[65%] overflow-hidden">
                  <Image
                    src="/maps/canada-outline.svg"
                    alt="加拿大轮廓地图"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-3">加拿大</CardTitle>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/zh/country/can">
                    查看详情
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* 更多相关国家卡片 */}
          </div>
        </div>
      </section>
    </>
  );
} 