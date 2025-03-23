/**
 * Función para obtener traducciones en componentes del servidor
 * @param translationsJSON - El objeto JSON de traducciones importado
 * @param locale - El código de idioma (es, en)
 * @returns El objeto de traducciones para el idioma especificado
 */
export function getServerTranslations<T extends { en: any; es: any }>(
  translationsJSON: T,
  locale: string
) {
  // Convertir a minúsculas y establecer por defecto 'es'
  const normalizedLocale = (locale || 'es').toLowerCase();
  
  // Devolver las traducciones según el idioma
  return normalizedLocale === 'en' ? translationsJSON.en : translationsJSON.es;
} 