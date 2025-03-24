'use client';

import { usePathname } from 'next/navigation';

/**
 * Hook para obtener las traducciones específicas de un componente
 * basado en el idioma actual
 *
 * @param translationsJSON - El objeto JSON de traducciones importado
 * @returns El objeto de traducciones correspondiente al idioma actual
 */
export function useComponentTranslations<
  T extends Record<'en' | 'es', Record<string, unknown>>,
>(translationsJSON: T): T['en'] | T['es'] {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';

  return locale === 'en' ? translationsJSON.en : translationsJSON.es;
}
