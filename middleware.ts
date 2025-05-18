import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLanguage, languages } from './components/i18n/config';

// List of supported locales
const locales = Object.keys(languages);

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  // Check if there's a cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check header for preferred language
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLang = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().split('-')[0])
      .find(lang => locales.includes(lang));
    
    if (preferredLang) {
      return preferredLang;
    }
  }

  // Default fallback
  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Root path - redirect to appropriate language
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // Return if the path already includes a locale
  if (locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) {
    return;
  }
  
  // Otherwise, rewrite to add the locale prefix
  const locale = getLocale(request);
  
  // Rewrite to the locale
  return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  // Only run on specific paths
  matcher: [
    // Skip static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)',
  ],
};
