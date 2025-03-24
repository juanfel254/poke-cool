'use client';

import { useGlobalTranslations, useTranslation } from '@/hooks/useGlobalTranslations';

/**
 * Componente que muestra mensajes globales utilizando los nuevos tipos generados
 */
export function GlobalMessage() {
  const globalT = useGlobalTranslations();
  const welcomeMessage = useTranslation('messages.welcome');
  const helloMessage = useTranslation('messages.hello', '¡Hola!');

  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">
        {globalT.messages.welcome}
      </h3>
      <p className="mb-4 text-sm">
        {helloMessage} - {welcomeMessage}
      </p>
      <div className="flex flex-col space-y-2">
        <div className="text-xs text-muted-foreground">
          {useTranslation('messages.get_started')}
        </div>
      </div>
    </div>
  );
} 