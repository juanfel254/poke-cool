// Definición de tipos para las traducciones
export type Translation = {
  common: {
    welcome: string;
    hello: string;
    get_started: string;
    deploy_now: string;
    read_docs: string;
    learn: string;
    examples: string;
    go_to_nextjs: string;
  };
  themeToggle: {
    light: string;
    dark: string;
    system: string;
    toggle_theme: string;
  };
};

// Traducciones en español
export const es: Translation = {
  common: {
    welcome: 'Bienvenido a la Pokédex',
    hello: 'Hola',
    get_started: 'Comienza editando',
    deploy_now: 'Desplegar ahora',
    read_docs: 'Leer documentación',
    learn: 'Aprender',
    examples: 'Ejemplos',
    go_to_nextjs: 'Ir a nextjs.org →'
  },
  themeToggle: {
    light: 'Modo claro',
    dark: 'Modo oscuro',
    system: 'Sistema',
    toggle_theme: 'Cambiar tema'
  }
};

// Traducciones en inglés
export const en: Translation = {
  common: {
    welcome: 'Welcome to the Pokédex',
    hello: 'Hello',
    get_started: 'Get started by editing',
    deploy_now: 'Deploy now',
    read_docs: 'Read our docs',
    learn: 'Learn',
    examples: 'Examples',
    go_to_nextjs: 'Go to nextjs.org →'
  },
  themeToggle: {
    light: 'Light mode',
    dark: 'Dark mode',
    system: 'System',
    toggle_theme: 'Toggle theme'
  }
};

// Función para obtener una traducción
export function getTranslation(locale: string): Translation {
  return locale === 'en' ? en : es;
}

// Función para obtener una clave de traducción específica
export function getTranslationKey(locale: string, key: string): string {
  const parts = key.split('.');
  let result: any = getTranslation(locale);
  
  for (const part of parts) {
    if (result[part] === undefined) {
      return key; // Devolver la clave si no se encuentra
    }
    result = result[part];
  }
  
  return result;
} 