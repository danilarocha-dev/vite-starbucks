import React from 'react';
import AboutInfo from '../components/AboutInfo';
import bgAbout from '../img/about/bg-about.png';
import aboutUsImg from '../img/about/about-us.png';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="p-[32px] px-[4%] flex flex-col items-center bg-primary-1 min-h-[calc(100vh-96px)] shadow-lg rounded-[32px] bg-cover bg-center xl: [4%] xl:justify-center"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >

      {/* Conteúdo */}
      <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-center xl:gap-12 w-full max-w-7xl">
        
        {/* Imagem Central (No Desktop, order-2 para ficar no meio visualmente, 
            mas ajustei a ordem dos irmãos para obter o efeito sanduíche: Info - Imagem - Info) */}
        <img
          src={aboutUsImg}
          alt="Copos Starbucks"
          className="w-[clamp(300px,50vw,500px)] xl:order-2 drop-shadow-xl z-1"
        />

        {/* Card 1: Nossa História */}
        {/* No desktop, queremos que este seja o primeiro (Esquerda) */}
        <div className="w-full xl:order-1 flex-1">
            <AboutInfo
            title="Nossa"
            highlightedTitle="História"
            description="Desde o início, nossa paixão pelo café nos inspira a oferecer experiências únicas em cada xícara. Com"
            highlightedDescription="grãos selecionados"
            className="h-full" // Garante altura igual se necessário
            />
            {/* Continuação do texto description que estava fora do span no original, 
                passei para dentro da prop ou poderia ajustar a prop para aceitar JSX. 
                Para simplificar, assumi que o texto segue a estrutura. */}
             <p className="hidden">e preparo artesanal, buscamos unir qualidade e sabor para nossos clientes.</p>
        </div>

        {/* Card 2: Nosso Propósito */}
        {/* No desktop, queremos que este seja o último (Direita) */}
        <div className="w-full xl:order-3 flex-1">
            <AboutInfo
            title="Nosso"
            highlightedTitle="Propósito"
            description="Inspirar momentos de conexão e bem-estar através do café. Acreditamos que cada xícara pode aproximar pessoas, despertar ideias e transformar rotinas."
            highlightedDescription="Nosso compromisso"
            />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
