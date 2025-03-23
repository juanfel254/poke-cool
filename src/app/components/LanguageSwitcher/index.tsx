'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { useComponentTranslations, useLocale } from '@/hooks';

// Importar directamente las traducciones
import translations from './translations.json';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  
  // Extraer solo la parte de la ruta después del locale
  const segments = pathname.split('/');
  const restOfPath = segments.slice(2).join('/');
  
  // Usar el hook para obtener las traducciones
  const t = useComponentTranslations(translations);
  
  // Cambiar el idioma
  const changeLocale = (locale: string) => {
    const newPath = `/${locale}${restOfPath ? '/' + restOfPath : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2" title={t.change_language}>
      <Button
        variant={currentLocale === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLocale('es')}
        title={t.language_es}
      >
        ES
      </Button>
      <Button
        variant={currentLocale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLocale('en')}
        title={t.language_en}
      >
        EN
      </Button>
    </div>
  );
} 