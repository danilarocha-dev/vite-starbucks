import React from 'react';
import AboutInfo from '../components/AboutInfo';
import bgAbout from '../img/about/bg-about.png';
import aboutUsImg from '../img/about/about-us.png';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="p-[32px] px-[4%] flex flex-col items-center bg-primary-1 min-h-[calc(100vh-96px)] shadow-lg rounded-[32px] bg-cover bg-center xl:m-[4%] xl:justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >

    
      <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-center xl:gap-12 w-full max-w-7xl">
        
        {/* Imagem Central (No Desktop, order-2 para ficar no meio visualmente, 
            mas ajustei a ordem dos irmãos para obter o efeito sanduíche: Info - Imagem - Info) */}
        <img
          src={aboutUsImg}
          alt="Copos Starbucks"
          className="w-[clamp(350px,60vw,650px)] xl:order-2 drop-shadow-xl z-1"
        />

        {/* Card 1: Nossa História */}
        <div className="w-full xl:order-1 flex-1">
            <AboutInfo
            title="Nossa"
            highlightedTitle="História"
            description="Desde o início, nossa paixão pelo café nos inspira a oferecer experiências únicas em cada xícara. Com"
            highlightedDescription="grãos selecionados"
            descriptionSuffix=" e preparo artesanal, buscamos unir qualidade e sabor para nossos clientes."
            className="h-full"
            /> 
        </div>

        {/* Card 2: Nosso Propósito */}
        <div className="w-full xl:order-3 flex-1">
            <AboutInfo
            title="Nosso"
            highlightedTitle="Propósito"
            description="Inspirar momentos de conexão e bem-estar através do café. Acreditamos que cada xícara pode aproximar pessoas, despertar ideias e transformar rotinas."
            highlightedDescription="Nosso compromisso"
            descriptionSuffix=" é oferecer qualidade, sustentabilidade e experiências que tornem o seu dia mais leve e especial."
            />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
