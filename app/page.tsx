"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon, DownloadIcon, GlobeIcon, MapIcon, BarChart3Icon, PresentationIcon, PrinterIcon } from "lucide-react";
import Image from 'next/image';

/**
 * Expanded list of popular countries – sample data.
 */
const popularCountries = [
  { code: "USA", name: "美国", image: "/maps/usa-outline.svg", alt: "美国轮廓地图 SVG" },
  { code: "CHN", name: "中国", image: "/maps/china-outline.svg", alt: "中国轮廓地图 SVG" },
  { code: "JPN", name: "日本", image: "/maps/japan-outline.svg", alt: "日本轮廓地图 SVG" },
  { code: "DEU", name: "德国", image: "/maps/germany-outline.svg", alt: "德国轮廓地图 SVG" },
  { code: "FRA", name: "法国", image: "/maps/france-outline.svg", alt: "法国轮廓地图 SVG" },
  { code: "GBR", name: "英国", image: "/maps/uk-outline.svg", alt: "英国轮廓地图 SVG" },
  { code: "BRA", name: "巴西", image: "/maps/brazil-outline.svg", alt: "巴西轮廓地图 SVG" },
  { code: "IND", name: "印度", image: "/maps/india-outline.svg", alt: "印度轮廓地图 SVG" },
  { code: "RUS", name: "俄罗斯", image: "/maps/russia-outline.svg", alt: "俄罗斯轮廓地图 SVG" },
  { code: "AUS", name: "澳大利亚", image: "/maps/australia-outline.svg", alt: "澳大利亚轮廓地图 SVG" },
  { code: "CAN", name: "加拿大", image: "/maps/canada-outline.svg", alt: "加拿大轮廓地图 SVG" },
  { code: "ITA", name: "意大利", image: "/maps/italy-outline.svg", alt: "意大利轮廓地图 SVG" },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '全球国家轮廓地图资源',
    description: '200+国家和地区的SVG、EPS和PNG格式高质量轮廓图',
    keywords: ['地图', '轮廓图', 'SVG', '国家边界'],
    creator: {
      '@type': 'Organization',
      name: '国家轮廓图资源网'
    },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl: 'https://www.countryoutlines.com/downloads/all-country-outlines.zip',
        encodingFormat: 'application/zip',
        contentSize: '120 MB'
      },
      {
        '@type': 'DataDownload',
        contentUrl: 'https://www.countryoutlines.com/downloads/usa-outline.svg',
        encodingFormat: 'image/svg+xml'
      }
    ],
    inLanguage: 'zh-CN'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-white">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-world-pattern bg-center opacity-10 mix-blend-overlay"
        />
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              全球国家轮廓地图 <span className="text-accent-400">一站式下载</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
              免费提供 <strong>200+ 国家/地区高清矢量边界</strong>
              （SVG · EPS · PNG），助您轻松完成网页设计、Power BI 可视化、教育演示与印刷制图。
            </p>

            <div className="mt-10 flex w-full items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="输入国家或 ISO 代码快速查找…"
                  className="pl-10 pr-4 py-3 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:bg-white/20"
                  aria-label="搜索国家轮廓地图"
                />
              </div>
              <Button 
                variant="default" 
                className="h-12 px-6 text-base bg-accent-500 hover:bg-accent-600 text-white"
              >
                搜索
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2.5">
                <MapIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  网页设计
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <BarChart3Icon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  数据可视化
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PresentationIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  教育演示
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PrinterIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  印刷制图
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <GlobeIcon className="h-5 w-5 text-accent-300" />
              <p className="text-sm text-white/70">
                数据源：Natural Earth • 授权：CC BY 4.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative p-6 rounded-2xl bg-primary-50/50 border border-primary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-primary-700">高质量矢量格式</h3>
              <p className="mt-2 text-gray-600">所有国家轮廓都是基于精确地理数据生成的SVG矢量图形，可无损缩放至任意大小。</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-secondary-50/50 border border-secondary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm5-1h6m-3-3v17" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-secondary-700">多格式支持</h3>
              <p className="mt-2 text-gray-600">除了SVG格式外，还提供EPS矢量格式和多种分辨率的PNG透明背景位图。</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-accent-50/50 border border-accent-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-accent-700">免费商用授权</h3>
              <p className="mt-2 text-gray-600">所有地图资源均基于CC BY 4.0授权，可免费用于个人和商业项目，仅需注明来源。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              热门国家轮廓图下载
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              以下国家轮廓地图下载量排名前十二，点击即可获取高质量SVG文件。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularCountries.map((c) => (
              <Card key={c.code} className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="p-0 bg-gray-50">
                  <div className="relative pt-[65%] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      width={300}
                      height={160}
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTYwIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl font-semibold">
                      {c.name}
                    </CardTitle>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {c.code}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full"
                    asChild
                  >
                    <a
                      href={`/downloads/${c.code.toLowerCase()}-outline.svg`}
                      title={`${c.name}轮廓地图 SVG 下载`}
                    >
                      <DownloadIcon className="mr-2 h-4 w-4" /> 下载 SVG
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-600 text-primary-600 hover:bg-primary-50"
              asChild
            >
              <a href="/countries">
                查看全部国家 &rarr;
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative isolate overflow-hidden bg-gray-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-world-pattern bg-cover opacity-10"
        />
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            一键打包下载全球国家轮廓地图
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300 mb-10">
            包含详细的使用说明文档与示例代码，一次性获取全部数据，节省查找时间。
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-accent-500 hover:bg-accent-600 text-white"
              asChild
            >
              <a
                href="/downloads/all-country-outlines.zip"
                rel="noopener"
                aria-label="下载全球国家轮廓地图 ZIP 文件"
              >
                <DownloadIcon className="mr-3 h-5 w-5" /> 下载完整资源包（120 MB）
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
