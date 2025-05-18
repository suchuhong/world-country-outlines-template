import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadIcon, ArrowLeftIcon, GlobeIcon } from 'lucide-react';

// Sample data for demonstration purposes - in a real app this would come from a database or API
const countryData = {
  USA: { name: 'United States', code: 'USA', continent: 'North America', image: '/maps/usa-outline.svg' },
  CHN: { name: 'China', code: 'CHN', continent: 'Asia', image: '/maps/china-outline.svg' },
  // ... other countries
};

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const code = resolvedParams.code.toUpperCase();
  const country = countryData[code as keyof typeof countryData];
  
  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The country outline you requested does not exist or has been removed.',
    };
  }
  
  return {
    title: `${country.name} Outline Map - Free SVG Download`,
    description: `Free high-quality ${country.name} vector outline map in SVG, EPS and PNG formats for web design, data visualization and more.`,
    keywords: [`${country.name} outline`, `${country.name} map`, `${country.name} vector`, `${country.name} border`, `${country.code} map`],
    alternates: {
      canonical: `/en/country/${resolvedParams.code.toLowerCase()}`,
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
        <h1 className="text-3xl font-bold mb-6">Country Not Found</h1>
        <p className="mb-8">Sorry, the country outline you requested does not exist or has been removed.</p>
        <Button asChild>
          <Link href="/en">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    );
  }
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: `${country.name} Outline Map`,
    description: `High-quality ${country.name} SVG vector outline map for web design, data visualization and other projects.`,
    contentUrl: `https://www.countryoutlines.com/maps/${country.code.toLowerCase()}-outline.svg`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    acquireLicensePage: 'https://www.countryoutlines.com/license',
    creditText: 'Country Outlines Resource'
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/en" className="hover:text-primary-600">Home</Link></li>
              <li><span className="px-2">/</span></li>
              <li><Link href="/en/countries" className="hover:text-primary-600">Country Index</Link></li>
              <li><span className="px-2">/</span></li>
              <li><Link href={`/en/continent/${country.continent.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-600">{country.continent}</Link></li>
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
              <Image
                src={country.image}
                alt={`${country.name} outline map`}
                width={400}
                height={400}
                className="object-contain max-h-full"
                quality={100}
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold">{country.name} Outline Map</h1>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                {country.code}
              </span>
            </div>
            
            <p className="text-gray-700 mb-8">
              High-quality {country.name} vector outline map for web design, data visualization, PowerBI reports, educational presentations, and print cartography. All formats support transparent backgrounds and can be freely resized and recolored.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Available Download Formats</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-primary-600 hover:bg-primary-700" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline.svg`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> SVG Vector Format
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline.eps`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> EPS Vector Format
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline-4k.png`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> PNG - 4K High Resolution
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full" 
                asChild
              >
                <a href={`/downloads/${country.code.toLowerCase()}-outline-hd.png`}>
                  <DownloadIcon className="mr-2 h-5 w-5" /> PNG - HD Standard
                </a>
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 flex items-center">
              <GlobeIcon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Data Source: Natural Earth • Licensed under <Link href="/en/license" className="text-primary-600 hover:underline">CC BY 4.0</Link>, free for personal and commercial projects
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Related Country Outlines</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Here would be recommended countries based on geographic location or other relationships */}
            {/* Example card */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="p-0 bg-gray-50">
                <div className="relative pt-[65%] overflow-hidden">
                  <Image
                    src="/maps/canada-outline.svg"
                    alt="Canada outline map"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-3">Canada</CardTitle>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/en/country/can">
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* More related country cards */}
          </div>
        </div>
      </section>
    </>
  );
} 