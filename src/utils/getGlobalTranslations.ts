import commonTranslations from '@/i18n/common.json';

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
export function getGlobalTranslations(locale: string) {
  // Normalizar el locale
  const normalizedLocale = (locale || 'es').toLowerCase();
  
  // Devolver las traducciones globales según el idioma
  return normalizedLocale === 'en' ? commonTranslations.en : commonTranslations.es;
} 