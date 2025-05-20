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
 * 人気のある国のリスト - サンプルデータ
 */
const popularCountries = [
  { code: "USA", name: "アメリカ合衆国", image: "/maps/usa-outline.svg", alt: "アメリカ合衆国の輪郭地図 SVG" },
  { code: "CHN", name: "中国", image: "/maps/china-outline.svg", alt: "中国の輪郭地図 SVG" },
  { code: "JPN", name: "日本", image: "/maps/japan-outline.svg", alt: "日本の輪郭地図 SVG" },
  { code: "DEU", name: "ドイツ", image: "/maps/germany-outline.svg", alt: "ドイツの輪郭地図 SVG" },
  { code: "FRA", name: "フランス", image: "/maps/france-outline.svg", alt: "フランスの輪郭地図 SVG" },
  { code: "GBR", name: "イギリス", image: "/maps/uk-outline.svg", alt: "イギリスの輪郭地図 SVG" },
  { code: "BRA", name: "ブラジル", image: "/maps/brazil-outline.svg", alt: "ブラジルの輪郭地図 SVG" },
  { code: "IND", name: "インド", image: "/maps/india-outline.svg", alt: "インドの輪郭地図 SVG" },
  { code: "RUS", name: "ロシア", image: "/maps/russia-outline.svg", alt: "ロシアの輪郭地図 SVG" },
  { code: "AUS", name: "オーストラリア", image: "/maps/australia-outline.svg", alt: "オーストラリアの輪郭地図 SVG" },
  { code: "CAN", name: "カナダ", image: "/maps/canada-outline.svg", alt: "カナダの輪郭地図 SVG" },
  { code: "ITA", name: "イタリア", image: "/maps/italy-outline.svg", alt: "イタリアの輪郭地図 SVG" },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '世界の国境線マップリソース',
    description: '200以上の国と地域の高品質な輪郭地図（SVG、EPS、PNG形式）',
    keywords: ['地図', '輪郭', 'SVG', '国境'],
    creator: {
      '@type': 'Organization',
      name: 'Country Outlines Resource'
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
    inLanguage: 'ja-JP'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ヒーローセクション */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-white">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-world-pattern bg-center opacity-10 mix-blend-overlay"
        />
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              世界の国境線マップ <span className="text-accent-400">ワンストップダウンロード</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              <strong>200以上の高解像度ベクトル国境線</strong>を無料でアクセス
              （SVG · EPS · PNG）ウェブデザイン、Power BI ビジュアライゼーション、教育プレゼンテーション、印刷地図作成に最適です。
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="国名またはISOコードを入力..."
                  className="pl-10 pr-4 py-3 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:bg-white/20"
                  aria-label="国境線マップを検索"
                />
              </div>
              <Button 
                variant="default" 
                className="h-12 px-6 text-base bg-accent-500 hover:bg-accent-600 text-white mt-3 sm:mt-0 w-full sm:w-auto"
              >
                検索
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2.5">
                <MapIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  ウェブデザイン
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <BarChart3Icon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  データ可視化
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PresentationIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  教育プレゼンテーション
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PrinterIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  印刷地図作成
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <GlobeIcon className="h-5 w-5 text-accent-300" />
              <p className="text-sm text-white/70">
                データソース: Natural Earth • ライセンス: CC BY 4.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative p-6 rounded-2xl bg-primary-50/50 border border-primary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-primary-700">高品質ベクトル形式</h3>
              <p className="mt-2 text-gray-600">すべての国境線は精密な地理データから生成されたSVGベクトルグラフィックスで、サイズを変更しても品質が劣化しません。</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-secondary-50/50 border border-secondary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm5-1h6m-3-3v17" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-secondary-700">複数形式対応</h3>
              <p className="mt-2 text-gray-600">SVG形式に加えて、EPSベクトル形式と複数の解像度のPNG透過背景ビットマップも提供しています。</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-accent-50/50 border border-accent-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-accent-700">商用利用可能な無料ライセンス</h3>
              <p className="mt-2 text-gray-600">すべての地図リソースはCC BY 4.0ライセンスの下で提供され、帰属表示のみで個人・商用プロジェクトに無料で使用できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 人気の国セクション */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              人気の国境線ダウンロード
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              これらの国境線は最もダウンロード数の多い12の地図です。クリックして高品質なSVGファイルを入手できます。
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
                      title={`${c.name}の輪郭地図SVGダウンロード`}
                    >
                      <DownloadIcon className="mr-2 h-4 w-4" /> SVGをダウンロード
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
              <a href="/ja/countries">
                すべての国を見る &rarr;
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* アクションセクション */}
      <section className="relative isolate overflow-hidden bg-gray-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-world-pattern bg-cover opacity-10"
        />
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            すべての国境線マップをダウンロード
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 mb-8">
            200以上の国と地域の高品質な輪郭地図を一括でダウンロード。SVG、EPS、PNG形式で提供。
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white"
            asChild
          >
            <a href="/ja/download-all">
              すべてダウンロード
            </a>
          </Button>
        </div>
      </section>
    </>
  );
} 