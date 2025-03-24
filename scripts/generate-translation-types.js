const fs = require('fs');
const path = require('path');

// Rutas de archivos
const TRANSLATIONS_PATH = path.resolve(__dirname, '../src/i18n/common.json');
const OUTPUT_PATH = path.resolve(__dirname, '../src/types/global-translations.ts');

// Función principal
function generateTypes() {
  console.log('Generando tipos para traducciones...');
  
  try {
    // Leer el archivo de traducciones
    const translationsContent = fs.readFileSync(TRANSLATIONS_PATH, 'utf8');
    const translations = JSON.parse(translationsContent);
    
    // Analizar la estructura de las traducciones para generar tipos
    const typesContent = generateTypesContent(translations);
    
    // Crear el directorio 'types' si no existe
    const typesDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(typesDir)) {
      fs.mkdirSync(typesDir, { recursive: true });
    }
    
    // Escribir el archivo de tipos
    fs.writeFileSync(OUTPUT_PATH, typesContent);
    
    console.log(`Tipos generados exitosamente en ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error al generar tipos:', error);
    process.exit(1);
  }
}

// Función para generar el contenido del archivo de tipos
function generateTypesContent(translations) {
  // Verificamos que tengamos una estructura de traducciones válida
  if (!translations || typeof translations !== 'object') {
    throw new Error('El archivo de traducciones no tiene un formato válido');
  }
  
  // Tomamos una muestra de un idioma para analizar su estructura
  const sampleLanguage = translations['es'] || translations['en'];
  if (!sampleLanguage) {
    throw new Error('No se encontró ningún idioma en las traducciones');
  }
  
  // Generamos la interfaz para las traducciones de un idioma específico
  const languageTypeContent = generateLanguageTypeInterface(sampleLanguage);
  
  // Generamos el código para la función de utilidad para acceso seguro a traducciones
  const accessUtility = generateAccessUtility();
  
  // Armamos el contenido completo del archivo
  return `/**
 * Este archivo es generado automáticamente.
 * No modificar manualmente. Ejecutar 'npm run generate-types' para regenerar.
 */

/**
 * Interfaz para las traducciones de un idioma específico
 */
export interface LanguageTranslations {
${languageTypeContent}
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

${accessUtility}
`;
}

// Función para generar la interfaz de traducciones de un idioma
function generateLanguageTypeInterface(languageObj, indent = 2) {
  let result = '';
  const spaces = ' '.repeat(indent);
  
  // Recorremos todas las claves del objeto
  for (const key in languageObj) {
    const value = languageObj[key];
    
    if (typeof value === 'object' && value !== null) {
      // Si el valor es un objeto, generamos una sub-interfaz
      result += `${spaces}${key}: {\n`;
      result += generateLanguageTypeInterface(value, indent + 2);
      result += `${spaces}};\n`;
    } else {
      // Si es un valor, generamos una propiedad de tipo string
      result += `${spaces}${key}: string;\n`;
    }
  }
  
  return result;
}

// Función para generar la utilidad de acceso seguro a traducciones
function generateAccessUtility() {
  return `/**
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
  fallback: string = ""
): string {
  const keys = path.split(".");
  let result: any = translations;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return fallback;
    }
  }

  return typeof result === "string" ? result : fallback;
}
`;
}

// Ejecutar la función principal
generateTypes(); 