import { useServerTranslations } from '@/lib/hooks/useServerTranslation';
import showcaseImg from '@/public/images/showcase_img.png';
import {
  CardListAndImagesSection,
  CardListSection,
  CardListTimeline,
  HorizontalCarouselSection,
  Icons,
  ImageRightHeader,
  InnerHTML,
  LangSettings,
  Page,
  ResponsiveButton,
  ResponsiveMenu,
  Row,
  SimpleFooter,
  Text,
  ThemeSettings,
  TopNavBar,
} from '@packages/daisy-ui-components';
import Link from 'next/link';

export default async function TemplatePage(props: any) {
  const { t } = await useServerTranslations(props);
  const serviceFeatures = [
    {
      title: t('services.features.reusableBlocks.title'),
      imgSrc: showcaseImg.src,
      description: t('services.features.reusableBlocks.description'),
    },
    {
      title: t('services.features.quickCustomization.title'),
      imgSrc: showcaseImg.src,
      description: t('services.features.quickCustomization.description'),
    },
    {
      title: t('services.features.scalableCampaigns.title'),
      imgSrc: showcaseImg.src,
      description: t('services.features.scalableCampaigns.description'),
    },
  ];
  const carouselItems = [
    { title: t('carousel.items.item1'), imageSrc: showcaseImg.src },
    { title: t('carousel.items.item2'), imageSrc: showcaseImg.src },
    { title: t('carousel.items.item3'), imageSrc: showcaseImg.src },
    { title: t('carousel.items.item4'), imageSrc: showcaseImg.src },
    { title: t('carousel.items.item5'), imageSrc: showcaseImg.src },
  ];
  const benefitFeatures = [
    {
      title: t('benefits.features.instantReuse.title'),
      description: t('benefits.features.instantReuse.description'),
    },
    {
      title: t('benefits.features.visualConsistency.title'),
      description: t('benefits.features.visualConsistency.description'),
    },
    {
      title: t('benefits.features.easyAdaptation.title'),
      description: t('benefits.features.easyAdaptation.description'),
    },
  ];
  const timelineItems = [
    {
      title: t('timeline.items.chooseComponents.title'),
      description: t('timeline.items.chooseComponents.description'),
      imageSrc: showcaseImg.src,
    },
    {
      title: t('timeline.items.customizeContent.title'),
      description: t('timeline.items.customizeContent.description'),
      imageSrc: showcaseImg.src,
    },
    {
      title: t('timeline.items.publishVariations.title'),
      description: t('timeline.items.publishVariations.description'),
      imageSrc: showcaseImg.src,
    },
    {
      title: t('timeline.items.validateResults.title'),
      description: t('timeline.items.validateResults.description'),
      imageSrc: showcaseImg.src,
    },
    {
      title: t('timeline.items.expandProducts.title'),
      description: t('timeline.items.expandProducts.description'),
      imageSrc: showcaseImg.src,
    },
    {
      title: t('timeline.items.scalableWorkflow.title'),
      description: t('timeline.items.scalableWorkflow.description'),
      imageSrc: showcaseImg.src,
    },
  ];

  return (
    <>
      <TopNavBar
        leftComponent={
          <Row>
            <Icons iconType="github" iconSize="2rem" />
            <Text bold tag="h1" size="xl">
              {t('navbar.title')}
            </Text>
          </Row>
        }
        rightComponent={
          <ResponsiveMenu position="bottom">
            <Row responsive="md" gap={8}>
              <Link href="#home" className="line-bottom-hover">
                <Text bold opacity="70">
                  {t('navbar.home')}
                </Text>
              </Link>
              <Link href="#services" className="line-bottom-hover">
                <Text bold opacity="70">
                  {t('navbar.services')}
                </Text>
              </Link>
              <Link href="#prices" className="line-bottom-hover">
                <Text bold opacity="70">
                  {t('navbar.prices')}
                </Text>
              </Link>
              <Link href="#about" className="line-bottom-hover">
                <Text bold opacity="70">
                  {t('navbar.about')}
                </Text>
              </Link>
              <Link href="#footer" className="line-bottom-hover">
                <Text bold opacity="70">
                  {t('navbar.contact')}
                </Text>
              </Link>
              <Row>
                <ThemeSettings />
                <LangSettings />
              </Row>
            </Row>
          </ResponsiveMenu>
        }
      />

      <Page>
        <ImageRightHeader
          id="home"
          title={<InnerHTML html={t('home.heroTitleHtml')} />}
          description={t('home.description')}
          description2={t('home.description2')}
          buttonText={t('home.primaryCta')}
          button2Text={t('home.secondaryCta')}
          imgSrc={showcaseImg.src}
        />
        <CardListAndImagesSection
          id="services"
          title={<InnerHTML html={t('services.titleHtml')} />}
          description={t('services.description')}
          buttonText={t('services.buttonText')}
          features={serviceFeatures}
        />
        <HorizontalCarouselSection
          id="prices"
          title={<InnerHTML html={t('carousel.titleHtml')} />}
          items={carouselItems}
        />
        <CardListSection
          id="about"
          title={<InnerHTML html={t('benefits.titleHtml')} />}
          buttonText={t('benefits.buttonText')}
          features={benefitFeatures}
        />
        <CardListTimeline items={timelineItems} />
      </Page>
      <SimpleFooter
        id="footer"
        companyName={t('footer.companyName')}
        year={new Date().getFullYear()}
        companyLogoUrl={showcaseImg.src}
        companyWebsite={t('footer.companyUrl')}
        companyEmail={t('footer.companyEmail')}
        companyPhone={t('footer.companyPhone')}
        companyAddress={t('footer.companyAddress')}
        socialInstagram={t('footer.socialInstagram')}
        socialLinkedIn={t('footer.socialLinkedIn')}
        socialTwitter={t('footer.socialTwitter')}
        socialWhatsapp={t('footer.socialWhatsapp')}
        termsUrl={t('footer.termsUrl')}
        privacyUrl={t('footer.privacyUrl')}
      />
    </>
  );
}
