'use client';

import { usePathname } from 'next/navigation';

/**
 * Hook para obtener el idioma actual del sitio
 * @returns El código de idioma actual (es, en)
 */
export function useLocale() {
  const pathname = usePathname();
  return pathname.split('/')[1] || 'es';
} 