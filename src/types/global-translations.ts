/**
 * Este archivo es generado automáticamente.
 * No modificar manualmente. Ejecutar 'npm run generate-types' para regenerar.
 */

/**
 * Tipo recursivo para valores de traducción
 */
export type TranslationValue = string | { [key: string]: TranslationValue };

/**
 * Interfaz para las traducciones de un idioma específico
 */
export interface LanguageTranslations {
  messages: {
    welcome: string;
    hello: string;
    get_started: string;
    deploy_now: string;
    read_docs: string;
    learn: string;
    examples: string;
    go_to_nextjs: string;
  };
  languages: {
    es: string;
    en: string;
  };

  [key: string]: TranslationValue;
}

/**
 * Interfaz para todas las traducciones globales
 */
export interface GlobalTranslations {
  es: LanguageTranslations;
  en: LanguageTranslations;
}

/**
 * Tipo para las claves de idioma soportadas
 */
export type SupportedLanguage = keyof GlobalTranslations;

/**
 * Función de utilidad para acceder de forma segura a traducciones anidadas
 *
 * @param translations Las traducciones del idioma actual
 * @param path Ruta de acceso a la traducción, usando puntos como separadores (ej: "messages.welcome")
 * @param fallback Valor de fallback en caso de que la traducción no exista
 * @returns La traducción encontrada o el fallback
 */
export function getTranslation(
  translations: LanguageTranslations,
  path: string,
  fallback: string = ''
): string {
  const keys = path.split('.');
  let result: TranslationValue = translations;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return fallback;
    }
  }

  return typeof result === 'string' ? result : fallback;
}

