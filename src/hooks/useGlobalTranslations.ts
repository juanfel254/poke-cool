'use client';

import { usePathname } from 'next/navigation';
import commonTranslations from '@/i18n/common.json';

/**
 * Hook para acceder a las traducciones globales en componentes cliente
 * 
 * Este hook proporciona acceso directo a las traducciones en common.json
 * sin necesidad de importar el archivo en cada componente.
 * 
 * @returns Las traducciones globales para el idioma actual
 * 
 * @example
 * // En un componente cliente:
 * const globalT = useGlobalTranslations();
 * return <p>{globalT.messages.welcome}</p>;
 */
export function useGlobalTranslations() {
  // Extraer el locale actual de la URL
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  
  // Devolver las traducciones globales según el idioma
  return locale === 'en' ? commonTranslations.en : commonTranslations.es;
} 