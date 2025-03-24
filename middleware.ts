import { NextResponse, NextRequest } from 'next/server';

// Locales soportados
const locales = ['es', 'en'];

// Locale por defecto
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  // Obtener la ruta solicitada y la URL completa
  const pathname = request.nextUrl.pathname;
  
  // Manejar explícitamente la ruta raíz
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  
  // Verificar si la ruta ya incluye un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // Si ya tiene un locale, continuar normalmente
  if (pathnameHasLocale) return NextResponse.next();
  
  // En caso contrario, redirigir añadiendo el locale por defecto
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * 1. /api (rutas de API)
     * 2. /_next (rutas internas de Next.js)
     * 3. /_vercel (rutas internas del sistema)
     * 4. /assets, /favicon.ico, etc. (archivos estáticos)
     */
    '/((?!api|_next|_vercel|.*\\..*|favicon.ico).*)',
    // Incluir explícitamente la ruta raíz para que siempre se procese
    '/'
  ],
}; 