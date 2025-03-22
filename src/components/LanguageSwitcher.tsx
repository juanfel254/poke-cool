'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/app/components/ui/button';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extraer el locale actual y el resto de la ruta
  const segments = pathname.split('/');
  const currentLocale = segments[1];
  const restOfPath = segments.slice(2).join('/');
  
  // Cambiar el idioma
  const changeLocale = (locale: string) => {
    const newPath = `/${locale}${restOfPath ? '/' + restOfPath : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={currentLocale === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLocale('es')}
      >
        ES
      </Button>
      <Button
        variant={currentLocale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLocale('en')}
      >
        EN
      </Button>
    </div>
  );
} 