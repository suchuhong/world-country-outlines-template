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
  { code: "USA", name: "미국", image: "/maps/usa-outline.svg", alt: "미국 윤곽도 SVG" },
  { code: "CHN", name: "중국", image: "/maps/china-outline.svg", alt: "중국 윤곽도 SVG" },
  { code: "JPN", name: "일본", image: "/maps/japan-outline.svg", alt: "일본 윤곽도 SVG" },
  { code: "DEU", name: "독일", image: "/maps/germany-outline.svg", alt: "독일 윤곽도 SVG" },
  { code: "FRA", name: "프랑스", image: "/maps/france-outline.svg", alt: "프랑스 윤곽도 SVG" },
  { code: "GBR", name: "영국", image: "/maps/uk-outline.svg", alt: "영국 윤곽도 SVG" },
  { code: "BRA", name: "브라질", image: "/maps/brazil-outline.svg", alt: "브라질 윤곽도 SVG" },
  { code: "IND", name: "인도", image: "/maps/india-outline.svg", alt: "인도 윤곽도 SVG" },
  { code: "RUS", name: "러시아", image: "/maps/russia-outline.svg", alt: "러시아 윤곽도 SVG" },
  { code: "AUS", name: "호주", image: "/maps/australia-outline.svg", alt: "호주 윤곽도 SVG" },
  { code: "CAN", name: "캐나다", image: "/maps/canada-outline.svg", alt: "캐나다 윤곽도 SVG" },
  { code: "ITA", name: "이탈리아", image: "/maps/italy-outline.svg", alt: "이탈리아 윤곽도 SVG" },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '세계 국가 윤곽도 리소스',
    description: '200개 이상의 국가와 지역의 SVG, EPS, PNG 형식 고품질 윤곽도',
    keywords: ['지도', '윤곽도', 'SVG', '국가 경계'],
    creator: {
      '@type': 'Organization',
      name: '국가 윤곽도 리소스'
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
    inLanguage: 'ko-KR'
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              세계 국가 윤곽도 <span className="text-accent-400">원스톱 다운로드</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              무료로 제공되는 <strong>200개 이상의 국가/지역 고품질 벡터 경계</strong>
              (SVG · EPS · PNG)를 통해 웹 디자인, Power BI 시각화, 교육 프레젠테이션 및 인쇄 지도 제작을 쉽게 완성하세요.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="국가 또는 ISO 코드로 빠르게 검색..."
                  className="pl-10 pr-4 py-3 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:bg-white/20"
                  aria-label="국가 윤곽도 검색"
                />
              </div>
              <Button 
                variant="default" 
                className="h-12 px-6 text-base bg-accent-500 hover:bg-accent-600 text-white mt-3 sm:mt-0 w-full sm:w-auto"
              >
                검색
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2.5">
                <MapIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  웹 디자인
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <BarChart3Icon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  데이터 시각화
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PresentationIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  교육 프레젠테이션
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PrinterIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  인쇄 지도
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <GlobeIcon className="h-5 w-5 text-accent-300" />
              <p className="text-sm text-white/70">
                데이터 출처: Natural Earth • 라이선스: CC BY 4.0
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
              <h3 className="mt-2 text-lg font-bold text-primary-700">고품질 벡터 형식</h3>
              <p className="mt-2 text-gray-600">모든 국가 윤곽도는 정확한 지리 데이터를 기반으로 생성된 SVG 벡터 그래픽으로, 어떤 크기로도 손실 없이 확대할 수 있습니다.</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-secondary-50/50 border border-secondary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm5-1h6m-3-3v17" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-secondary-700">다양한 형식 지원</h3>
              <p className="mt-2 text-gray-600">SVG 형식 외에도 EPS 벡터 형식과 다양한 해상도의 PNG 투명 배경 비트맵을 제공합니다.</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-accent-50/50 border border-accent-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-accent-700">무료 상업적 사용</h3>
              <p className="mt-2 text-gray-600">모든 지도 리소스는 CC BY 4.0 라이선스로 제공되며, 출처만 명시하면 개인 및 상업 프로젝트에 무료로 사용할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              인기 국가 윤곽도 다운로드
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              다음 국가 윤곽도는 다운로드 수 상위 12위 안에 드는 국가들입니다. 클릭하여 고품질 SVG 파일을 받으세요.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {popularCountries.map((c, index) => (
              <Card key={c.code} className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="p-0 bg-gray-50">
                  <div className="relative pt-[65%] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      priority={index < 4}
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
                      title={`${c.name} 윤곽도 SVG 다운로드`}
                    >
                      <DownloadIcon className="mr-2 h-4 w-4" /> SVG 다운로드
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
                모든 국가 보기 &rarr;
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
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-8">
            무료로 제공되는 고품질 국가 윤곽도를 활용하여 프로젝트를 완성하세요.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white"
            asChild
          >
            <a href="/countries">
              모든 국가 보기
            </a>
          </Button>
        </div>
      </section>
    </>
  );
} 