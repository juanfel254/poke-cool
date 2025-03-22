'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/app/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="w-9 cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      variant="outline"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100" />
    </Button>
  );
}
