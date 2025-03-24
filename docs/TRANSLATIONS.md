# Sistema de Traducciones

Este proyecto implementa un sistema de traducciones con tipos generados automáticamente a partir del archivo de traducciones.

## Estructura de archivos

- `src/i18n/common.json` - Contiene todas las traducciones globales para todos los idiomas.
- `src/types/global-translations.ts` - Archivo generado automáticamente con los tipos TypeScript para las traducciones.
- `scripts/generate-translation-types.js` - Script que genera los tipos a partir del archivo de traducciones.

## Características principales

- **Tipado estricto**: Todas las traducciones están correctamente tipadas para evitar errores en tiempo de compilación.
- **Generación automática**: Los tipos se generan automáticamente cada vez que se modifican las traducciones.
- **Utilidades para acceder a traducciones**: Funciones helper para acceder a las traducciones tanto en componentes cliente como servidor.

## ¿Cómo funciona?

1. Las traducciones se definen en `src/i18n/common.json`
2. El script `generate-translation-types.js` lee este archivo y genera tipos TypeScript
3. Los hooks y utilidades usan estos tipos para proporcionar autocompletado y seguridad de tipos

## Cómo añadir nuevas traducciones

1. Edita el archivo `src/i18n/common.json`
2. Ejecuta `npm run generate-types` para actualizar los tipos
3. Usa las nuevas traducciones en tu aplicación con autocompletado

## Componentes de servidor

Para componentes de servidor, utiliza la función `getGlobalTranslations` o `getTranslationForLocale`:

```tsx
import { getGlobalTranslations, getTranslationForLocale } from '@/utils';

export default async function MyServerComponent({ params }: { params: { locale: string } }) {
  // Acceder a todas las traducciones
  const t = getGlobalTranslations(params.locale);
  
  // O acceder a una traducción específica
  const welcome = getTranslationForLocale(params.locale, 'messages.welcome');
  
  return (
    <div>
      <h1>{welcome}</h1>
      <p>{t.messages.hello}</p>
    </div>
  );
}
```

## Componentes cliente

Para componentes cliente, utiliza los hooks `useGlobalTranslations` o `useTranslation`:

```tsx
'use client';

import { useGlobalTranslations, useTranslation } from '@/hooks/useGlobalTranslations';

export function MyClientComponent() {
  // Acceder a todas las traducciones
  const t = useGlobalTranslations();
  
  // O acceder a una traducción específica
  const welcome = useTranslation('messages.welcome');
  
  return (
    <div>
      <h1>{welcome}</h1>
      <p>{t.messages.hello}</p>
    </div>
  );
}
```

## Guía de uso: cuándo usar cada método

Este sistema ofrece dos formas de acceder a las traducciones, cada una con ventajas específicas:

### Método estándar: Objeto completo de traducciones

```tsx
// Cliente
const t = useGlobalTranslations();

// Servidor
const t = getGlobalTranslations(locale);
```

**Ventajas:**
- Proporciona autocompletado en el IDE gracias a los tipos generados
- Mejor para acceder a múltiples traducciones en un componente
- Sintaxis más clara con notación de punto
- **RECOMENDADO**: Este es el enfoque estándar para la mayoría de los casos

**Úsalo cuando:**
- Necesites varias traducciones en el mismo componente
- Quieras aprovechar el autocompletado del IDE
- Trabajas en componentes complejos

### Método específico: Acceso directo a una traducción

```tsx
// Cliente
const welcome = useTranslation('messages.welcome', 'Fallback');

// Servidor
const welcome = getTranslationForLocale(locale, 'messages.welcome', 'Fallback');
```

**Ventajas:**
- Sintaxis más concisa para casos simples
- Permite especificar un valor fallback
- Útil cuando la ruta de acceso es dinámica

**Úsalo cuando:**
- Solo necesites una traducción específica
- Necesites un valor fallback por si la traducción no existe
- La ruta sea dinámica (ej. `path.to.${dynamicKey}`)
- Quieras una sintaxis más compacta en componentes simples

### Ejemplos de uso combinado

```tsx
// Acceso combinado en un componente
export function MyComponent() {
  // Usa el objeto completo para la mayoría de traducciones
  const t = useGlobalTranslations();
  
  // Usa acceso directo para un caso especial con fallback
  const dynamicKey = getDynamicKey();
  const specialMessage = useTranslation(`messages.${dynamicKey}`, 'Mensaje predeterminado');
  
  return (
    <div>
      <h1>{t.messages.welcome}</h1>
      <p>{t.messages.hello}</p>
      <span>{specialMessage}</span>
    </div>
  );
}
```

## Mantenimiento

Cada vez que modifiques el archivo de traducciones, deberás regenerar los tipos:

```bash
npm run generate-types
```

Este comando se ejecuta automáticamente durante el build de la aplicación, pero es recomendable ejecutarlo manualmente durante el desarrollo para tener acceso inmediato a los nuevos tipos.

## Ventajas sobre el enfoque anterior

- No más uso de `any` en tipos de traducciones
- Detección de errores en tiempo de compilación
- Mejor autocompletado en el IDE
- Mantenimiento más sencillo al añadir nuevas traducciones 