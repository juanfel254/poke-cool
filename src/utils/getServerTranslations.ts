/**
 * Función para obtener traducciones específicas de componentes en el servidor
 * 
 * @param translationsJSON - El objeto JSON de traducciones importado
 * @param locale - El código de idioma (es, en)
 * @returns El objeto de traducciones para el idioma especificado
 * 
 * @example
 * // En un componente servidor:
 * import translations from './translations.json';
 * const t = getServerTranslations(translations, params.locale);
 * return <div>{t.title}</div>;
 */
export function getServerTranslations<T extends { en: any; es: any }>(
  translationsJSON: T,
  locale: string
) {
  // Normalizar el locale
  const normalizedLocale = (locale || 'es').toLowerCase();
  
  // Devolver las traducciones según el idioma
  return normalizedLocale === 'en' ? translationsJSON.en : translationsJSON.es;
} 