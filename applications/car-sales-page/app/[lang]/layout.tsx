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
          <Row>
            <Icons iconType="brush" iconSize="1.8rem" />
            <Text bold tag="h1" size="xl">
              {t('navbar.title')}
            </Text>
          </Row>
        }
        centerComponent={
          <Row gap={4}>
            <Text bold size="sm" opacity="80">
              {t('navbar.home')}
            </Text>
            <Text bold size="sm" opacity="80">
              {t('navbar.cars')}
            </Text>
            <Text bold size="sm" opacity="80">
              {t('navbar.contact')}
            </Text>
            <Text bold size="sm" opacity="80">
              {t('navbar.about')}
            </Text>
          </Row>
        }
      />
      {props.children}
      <Toastify />
    </Suspense>
  );
}
