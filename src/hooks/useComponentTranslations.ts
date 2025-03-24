'use client';

import { usePathname } from 'next/navigation';

/**
 * Hook para obtener las traducciones específicas de un componente
 * basado en el idioma actual
 * 
 * @param translationsJSON - El objeto JSON de traducciones importado
 * @returns El objeto de traducciones correspondiente al idioma actual
 * 
 * @example
 * // En un componente cliente:
 * import translations from './translations.json';
 * const t = useComponentTranslations(translations);
 * return <button title={t.tooltip}>{t.label}</button>;
 */
export function useComponentTranslations<T extends { en: any; es: any }>(translationsJSON: T) {
  // Extraer el locale de la URL (primer segmento)
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  
  // Devolver las traducciones según el idioma actual
  return locale === 'en' ? translationsJSON.en : translationsJSON.es;
} 