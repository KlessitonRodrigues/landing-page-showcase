import {
  generateStaticParams,
  setTranslationEnv,
  useServerTranslations,
} from '@/lib/hooks/useServerTranslation';
import { LoadScreen, Toastify } from '@packages/daisy-ui-components';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export { generateStaticParams };

export async function generateMetadata(props: any): Promise<Metadata> {
  const { t } = await useServerTranslations(props);

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function PageLayout(props: any) {
  setTranslationEnv((await props.params)?.lang);

  return (
    <Suspense fallback={<LoadScreen />}>
      {props.children}
      <Toastify />
    </Suspense>
  );
}
