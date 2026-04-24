import showcaseImg from '@/public/images/showcase_img.png';
import {
  HeadSection,
  HorizontalCarouselSection,
  MiddleSection,
  MiddleSection2,
  Page,
} from '@packages/daisy-ui-components';

export default function WebApiDashboardPage() {
  return (
    <Page>
      <HeadSection
        title={
          <>
            Crie <span>landing pages</span> que
            <br />
            convertem <span>sem depender</span>
            <br />
            de programação
          </>
        }
        description="Comece agora mesmo - sem fidelização, cancele quando quiser"
        description2="Avaliado por mais de 200 lojistas"
        buttonText="Ver Demo"
        button2Text="Teste Grátis"
        imgSrc={showcaseImg.src}
      />
      <MiddleSection
        title={
          <>
            Tudo o que você precisa para criar <span>landing pages</span> incríveis
          </>
        }
        description="Nossa plataforma oferece uma variedade de recursos para personalizar suas landing pages, incluindo templates personalizáveis, integração com ferramentas de marketing e análise de desempenho."
        buttonText="Explore os Recursos"
        features={[
          {
            title: 'Templates Personalizáveis',
            imgSrc: showcaseImg.src,
            description:
              'Escolha entre uma variedade de templates modernos e personalizáveis para criar a landing page perfeita para o seu negócio.',
          },
          {
            title: 'Integração com Ferramentas de Marketing',
            imgSrc: showcaseImg.src,
            description:
              'Conecte facilmente suas landing pages com as principais ferramentas de marketing para maximizar seus resultados.',
          },
          {
            title: 'Análise de Desempenho',
            imgSrc: showcaseImg.src,
            description:
              'Acompanhe o desempenho de suas landing pages com análises detalhadas e otimize suas estratégias de marketing.',
          },
        ]}
      />
      <MiddleSection2
        title={
          <>
            Por que escolher nossa plataforma de <span>landing pages</span>?
          </>
        }
        buttonText="Veja os Benefícios"
        features={[
          {
            title: 'Fácil de Usar',
            description:
              'Nossa plataforma é projetada para ser intuitiva e fácil de usar, permitindo que você crie landing pages incríveis sem precisar de habilidades técnicas.',
          },
          {
            title: 'Alta Conversão',
            description:
              'Nossos templates e recursos são otimizados para maximizar as taxas de conversão, ajudando você a alcançar seus objetivos de marketing.',
          },
          {
            title: 'Suporte Dedicado',
            description:
              'Nossa equipe de suporte está sempre pronta para ajudar você a tirar o máximo proveito da nossa plataforma e resolver quaisquer dúvidas ou problemas que possam surgir.',
          },
        ]}
      />
      <HorizontalCarouselSection
        title={
          <>
            Crie <span>landing pages</span> que convertem <span>sem depender</span>
            <br />
            de programação
          </>
        }
        items={[
          {
            title:
              'Nossa equipe de suporte está sempre pronta para ajudar você a tirar o máximo proveito da nossa plataforma',
            imageSrc: showcaseImg.src,
          },
          {
            title:
              'Nossos templates e recursos são otimizados para maximizar as taxas de conversão, ajudando você a alcançar seus objetivos de marketing.',
            imageSrc: showcaseImg.src,
          },
          {
            title:
              'Nossa plataforma é projetada para ser intuitiva e fácil de usar, permitindo que você crie landing pages incríveis sem precisar de habilidades técnicas.',
            imageSrc: showcaseImg.src,
          },
          {
            title:
              'Nossa equipe de suporte está sempre pronta para ajudar você a tirar o máximo proveito da nossa plataforma',
            imageSrc: showcaseImg.src,
          },
          {
            title:
              'Nossos templates e recursos são otimizados para maximizar as taxas de conversão, ajudando você a alcançar seus objetivos de marketing.',
            imageSrc: showcaseImg.src,
          },
        ]}
      />
    </Page>
  );
}
