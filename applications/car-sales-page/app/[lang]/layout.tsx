import {
  generateStaticParams,
  setTranslationEnv,
  useServerTranslations,
} from '@/lib/hooks/useServerTranslation';
import { Icons, LoadScreen, Row, Text, Toastify, TopNavBar } from '@packages/daisy-ui-components';
import { Suspense } from 'react';

export { generateStaticParams };

export default async function PageLayout(props: any) {
  const { t } = await useServerTranslations(props);
  setTranslationEnv((await props.params)?.lang);

  return (
    <Suspense fallback={<LoadScreen />}>
      <TopNavBar
        leftComponent={
          <>
            <Icons iconType="car" iconSize="2.8rem" />
            <Text bold tag="h1" size="xl">
              {t('navbar.title')}
            </Text>
          </>
        }
        rightComponent={
          <>
            <Text bold opacity="70">
              {t('navbar.home')}
            </Text>
            <Text bold opacity="70">
              {t('navbar.cars')}
            </Text>
            <Text bold opacity="70">
              {t('navbar.contact')}
            </Text>
            <Text bold opacity="70">
              {t('navbar.about')}
            </Text>
          </>
        }
      />
      {props.children}
      <Toastify />
    </Suspense>
  );
}
