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
  { code: "USA", name: "United States", image: "/maps/usa-outline.svg", alt: "United States outline map SVG" },
  { code: "CHN", name: "China", image: "/maps/china-outline.svg", alt: "China outline map SVG" },
  { code: "JPN", name: "Japan", image: "/maps/japan-outline.svg", alt: "Japan outline map SVG" },
  { code: "DEU", name: "Germany", image: "/maps/germany-outline.svg", alt: "Germany outline map SVG" },
  { code: "FRA", name: "France", image: "/maps/france-outline.svg", alt: "France outline map SVG" },
  { code: "GBR", name: "United Kingdom", image: "/maps/uk-outline.svg", alt: "United Kingdom outline map SVG" },
  { code: "BRA", name: "Brazil", image: "/maps/brazil-outline.svg", alt: "Brazil outline map SVG" },
  { code: "IND", name: "India", image: "/maps/india-outline.svg", alt: "India outline map SVG" },
  { code: "RUS", name: "Russia", image: "/maps/russia-outline.svg", alt: "Russia outline map SVG" },
  { code: "AUS", name: "Australia", image: "/maps/australia-outline.svg", alt: "Australia outline map SVG" },
  { code: "CAN", name: "Canada", image: "/maps/canada-outline.svg", alt: "Canada outline map SVG" },
  { code: "ITA", name: "Italy", image: "/maps/italy-outline.svg", alt: "Italy outline map SVG" },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Global Country Outline Maps Resource',
    description: 'High-quality outline maps of 200+ countries and regions in SVG, EPS and PNG formats',
    keywords: ['maps', 'outlines', 'SVG', 'country borders'],
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
    inLanguage: 'en-US'
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
              Global Country Outline Maps <span className="text-accent-400">One-Stop Download</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Free access to <strong>200+ high-resolution vector borders</strong>
              (SVG · EPS · PNG) to easily complete web design, Power BI visualization, educational presentations & print cartography.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Enter country name or ISO code..."
                  className="pl-10 pr-4 py-3 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:bg-white/20"
                  aria-label="Search country outline maps"
                />
              </div>
              <Button 
                variant="default" 
                className="h-12 px-6 text-base bg-accent-500 hover:bg-accent-600 text-white mt-3 sm:mt-0 w-full sm:w-auto"
              >
                Search
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2.5">
                <MapIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  Web Design
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <BarChart3Icon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  Data Visualization
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PresentationIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  Educational Presentations
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <PrinterIcon className="h-6 w-6 text-accent-300" />
                <p className="text-sm text-white/80">
                  Print Cartography
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <GlobeIcon className="h-5 w-5 text-accent-300" />
              <p className="text-sm text-white/70">
                Data Source: Natural Earth • License: CC BY 4.0
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
              <h3 className="mt-2 text-lg font-bold text-primary-700">High-Quality Vector Format</h3>
              <p className="mt-2 text-gray-600">All country outlines are SVG vector graphics generated from precise geographic data, scalable to any size without loss of quality.</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-secondary-50/50 border border-secondary-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm5-1h6m-3-3v17" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-secondary-700">Multiple Format Support</h3>
              <p className="mt-2 text-gray-600">In addition to SVG format, we also provide EPS vector format and PNG transparent background bitmaps in multiple resolutions.</p>
            </div>
            
            <div className="relative p-6 rounded-2xl bg-accent-50/50 border border-accent-100">
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-bold text-accent-700">Free Commercial License</h3>
              <p className="mt-2 text-gray-600">All map resources are licensed under CC BY 4.0, free for personal and commercial projects with only attribution required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Popular Country Outline Downloads
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              These country outlines are our top twelve most downloaded maps. Click to get high-quality SVG files.
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
                      title={`${c.name} outline map SVG download`}
                    >
                      <DownloadIcon className="mr-2 h-4 w-4" /> Download SVG
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
              <a href="/en/countries">
                View All Countries &rarr;
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
            Need All Country Outlines?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Download our complete collection of country outline maps in a single package
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <Button size="lg" className="h-14 px-6 text-base bg-accent-500 hover:bg-accent-600">
              <DownloadIcon className="mr-2 h-5 w-5" /> Download All SVG Files (110 MB)
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-6 text-base border-gray-700 text-white hover:bg-gray-800">
              <DownloadIcon className="mr-2 h-5 w-5" /> Download All PNG Files (320 MB)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
