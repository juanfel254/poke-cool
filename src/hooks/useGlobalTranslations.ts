'use client';

import { usePathname } from 'next/navigation';
import commonTranslations from '@/i18n/common.json';
import { LanguageTranslations, getTranslation } from '@/types/global-translations';

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
export function useGlobalTranslations(): LanguageTranslations {
  // Extraer el locale actual de la URL
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  
  // Devolver las traducciones globales según el idioma
  return locale === 'en' ? commonTranslations.en : commonTranslations.es;
}

/**
 * Hook para acceder directamente a una traducción específica
 * 
 * @param path Ruta a la traducción, usando puntos como separadores (ej: "messages.welcome")
 * @param fallback Valor de fallback en caso de que la traducción no exista
 * @returns La traducción correspondiente
 * 
 * @example
 * // En un componente cliente:
 * const welcomeMessage = useTranslation('messages.welcome', 'Bienvenido');
 * return <p>{welcomeMessage}</p>;
 */
export function useTranslation(path: string, fallback: string = ''): string {
  const translations = useGlobalTranslations();
  return getTranslation(translations, path, fallback);
} 