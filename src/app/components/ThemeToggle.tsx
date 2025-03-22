'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/app/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="group w-9 cursor-pointer dark:hover:shadow-[0px_0px_30px_0px_#a0aec0] dark:hover:shadow-neutral-100"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      variant="outline"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 opacity-60 transition-all group-hover:opacity-100 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 opacity-60 group-hover:opacity-100 dark:scale-100" />
    </Button>
  );
}
