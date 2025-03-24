import { getCurrentLocale } from '@/utils/getCurrentLocale';
import { getServerTranslations } from '@/utils';
import translations from './translations.json';

export default async function ServerComponent() {
  const locale = await getCurrentLocale();
  const t = getServerTranslations(translations, locale);

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
    </div>
  );
}
