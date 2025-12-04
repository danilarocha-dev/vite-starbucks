import React from 'react';
import AboutInfo from '../components/AboutInfo';
import bgAbout from '../img/about/bg-about.png';
import aboutUsImg from '../img/about/about-us.png';

const AboutSection = () => {
  return (
    
    <div className='bg-app-theme w-full min-h-[calc(100vh-96px)] flex items-center justify-center py-8'>

    <section id="about"
      className="relative flex flex-col items-center min-h-[calc(100vh-96px)] p-8 px-[4%] mt-4 bg-primary-1 bg-center rounded-[32px] shadow-lg overflow-hidden xl:m-[4%] xl:justify-center"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >

    {/* Container Flexível */}
      <div className="flex flex-col items-center gap-8 w-full max-w-7xl xl:flex-row xl:justify-between xl:gap-12">
        
        {/* IMAGEM CENTRAL 
            No Mobile: Ordem natural
            No Desktop (xl): order-2 para ficar no meio (Sanduíche)
        */}
        <img
          src={aboutUsImg}
          alt="Copos Starbucks"
          className="w-[clamp(300px,50vw,500px)] xl:order-2 drop-shadow-xl z-1"
        />

        {/* Card 1: Nossa História (Esquerda no Desktop) */}
        <div className="w-full xl:order-1 flex-1">
            <AboutInfo
            title="Nossa"
            highlightedTitle="História"
            description="Desde o início, nossa paixão pelo café nos inspira a oferecer experiências únicas em cada xícara. Com"
            highlightedDescription="grãos selecionados"
            descriptionSuffix=" e preparo artesanal, buscamos unir qualidade e sabor para nossos clientes."
            
            /> 
        </div>

        {/* Card 2: Nosso Propósito (Direita no Desktop) */}
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
    </div>
  );
};

export default AboutSection;