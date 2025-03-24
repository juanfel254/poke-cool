/**
 * Función para obtener traducciones específicas de componentes en el servidor
 *
 * @param translationsJSON - El objeto JSON de traducciones importado
 * @param locale - El código de idioma (es, en)
 * @returns El objeto de traducciones para el idioma especificado
 */
export function getServerTranslations<
  T extends Record<'en' | 'es', Record<string, unknown>>,
>(translationsJSON: T, locale: string): T['en'] | T['es'] {
  const normalizedLocale = (locale || 'es').toLowerCase();

  return normalizedLocale === 'en' ? translationsJSON.en : translationsJSON.es;
}
