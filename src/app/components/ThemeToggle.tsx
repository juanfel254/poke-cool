'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/app/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getTranslationKey } from '@/i18n/translations';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Extraer el locale de la URL (primer segmento)
  const locale = pathname.split('/')[1] || 'es';
  
  // Para evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Evitamos renderizar el botón hasta que el componente esté montado
  if (!mounted) return null;
  
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const title = getTranslationKey(locale, `themeToggle.${nextTheme}`);

  return (
    <Button
      className="group w-9 cursor-pointer dark:hover:shadow-[0px_0px_30px_0px_#a0aec0] dark:hover:shadow-neutral-100"
      onClick={() => setTheme(nextTheme)}
      title={`${getTranslationKey(locale, 'themeToggle.toggle_theme')}: ${title}`}
      variant="outline"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 opacity-60 transition-all group-hover:opacity-100 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 opacity-60 group-hover:opacity-100 dark:scale-100" />
    </Button>
  );
}
