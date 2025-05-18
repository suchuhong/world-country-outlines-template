
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon, DownloadIcon, GlobeIcon } from "lucide-react";

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
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              全球国家轮廓地图 <span className="text-sky-600">一站式下载</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              免费提供 <strong>200+ 国家/地区高清矢量边界</strong>
              （SVG · EPS · PNG），助您轻松完成网页设计、Power BI 可视化、教育演示与印刷制图。
            </p>

            <div className="mt-10 flex w-full items-center justify-center gap-2">
              <div className="relative w-full max-w-[28rem]">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="输入国家或 ISO 代码快速查找…"
                  className="pl-9 pr-4 py-3 text-base"
                  aria-label="搜索国家轮廓地图"
                />
              </div>
              <Button variant="default" className="h-12 px-6 text-base">
                搜索
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <GlobeIcon className="h-6 w-6 text-sky-600" />
              <p className="text-sm text-gray-600">
                数据源：Natural Earth • 授权：CC BY 4.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            热门下载
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-700">
            以下国家轮廓地图下载量排名前十二，点击即可获取 SVG 文件。
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularCountries.map((c) => (
              <Card key={c.code} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="h-40 w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    width={300}
                    height={160}
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {c.name}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative isolate overflow-hidden bg-gray-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[url('/world-grid.svg')] bg-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            一键打包下载全球国家轮廓地图
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            包含 README 与示例代码，一次性获取全部数据，节省查找时间。
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="/downloads/all-country-outlines.zip"
                rel="noopener"
                aria-label="下载全球国家轮廓地图 ZIP 文件"
              >
                <DownloadIcon className="mr-3 h-5 w-5" /> 下载 ZIP（120 MB）
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
