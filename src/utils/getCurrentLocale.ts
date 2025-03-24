import { headers } from 'next/headers';

export async function getCurrentLocale(): Promise<'es' | 'en'> {
  const headersList = await headers();

  const pathname =
    headersList.get('x-invoke-path') || headersList.get('referer') || '';

  const match = pathname.match(/^\/(en|es)(\/|$)/);
  return match?.[1] === 'en' ? 'en' : 'es';
}
