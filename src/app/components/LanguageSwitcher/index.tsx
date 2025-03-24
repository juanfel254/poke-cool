'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { useComponentTranslations, useLocale, useGlobalTranslations } from '@/hooks';
import translations from './translations.json';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const segments = pathname.split('/');
  const restOfPath = segments.slice(2).join('/');
  
  const t = useComponentTranslations(translations);
  const globalT = useGlobalTranslations();
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
        {globalT.languages.es}
      </Button>
      <Button
        variant={currentLocale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLocale('en')}
        title={t.language_en}
      >
        {globalT.languages.en}
      </Button>
    </div>
  );
} 