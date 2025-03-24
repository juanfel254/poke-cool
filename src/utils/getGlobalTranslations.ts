import commonTranslations from '@/i18n/common.json';
import { LanguageTranslations, getTranslation } from '@/types/global-translations';

/**
 * Utilidad para acceder a las traducciones globales en componentes servidor
 * 
 * Esta función proporciona acceso directo a las traducciones en common.json
 * sin necesidad de importar el archivo en cada componente de servidor.
 * 
 * @param locale - El código de idioma actual (es, en)
 * @returns Las traducciones globales para el idioma especificado
 * 
 * @example
 * // En un componente servidor:
 * const globalT = getGlobalTranslations(params.locale);
 * return <p>{globalT.messages.welcome}</p>;
 */
export function getGlobalTranslations(locale: string): LanguageTranslations {
  // Normalizar el locale
  const normalizedLocale = (locale || 'es').toLowerCase();
  
  // Devolver las traducciones globales según el idioma
  return normalizedLocale === 'en' ? commonTranslations.en : commonTranslations.es;
}

/**
 * Utilidad para acceder directamente a una traducción específica (para componentes servidor)
 * 
 * @param locale Código de idioma (es, en)
 * @param path Ruta a la traducción, usando puntos como separadores (ej: "messages.welcome")
 * @param fallback Valor de fallback en caso de que la traducción no exista
 * @returns La traducción correspondiente
 * 
 * @example
 * // En un componente servidor:
 * const welcomeMessage = getTranslationForLocale('es', 'messages.welcome', 'Bienvenido');
 * return <p>{welcomeMessage}</p>;
 */
export function getTranslationForLocale(locale: string, path: string, fallback: string = ''): string {
  const translations = getGlobalTranslations(locale);
  return getTranslation(translations, path, fallback);
} 