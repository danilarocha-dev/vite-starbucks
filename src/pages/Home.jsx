import React from 'react';
import backgroundHome from '../img/background-home.png';
import homeDetail from '../img/detail.png';


function Home() {
  return (
    // #home
    <section
      id="home"
      style={{ backgroundImage: `url(${backgroundHome})` }}
      className="
        flex flex-col items-center gap-3
        min-h-[calc(100vh-96px)]
        pb-8 px-[4%]
        pt-[clamp(0px,5vw,32px)]
        bg-cover bg-no-repeat bg-center
      "
    >

      {/* .home-image */}
      <img
        src={homeDetail}
        alt="Starbucks Drink"
        className="
        w-[clamp(320px,50%,450px)]
        mt-7"
      />

      {/* .home-title */}
      <h1 className="
          text-neutral-8
          text-center
          text-[clamp(3rem,5vw,4.3rem)]
          uppercase
          leading-[1.2]
          max-w-[700px]
          mt-7
          font-semibold
        "
      >
        Mais que café, uma{' '}
        {/* span */}
        <span className="
        text-primary-1">
          experiência.
        </span>
      </h1>

      {/* .home-description */}
      <p
        className="
          text-neutral-9
          text-center
          text-base
          font-medium
          max-w-[600px]
        "
      >
        Descubra cafés icônicos, sabores únicos e a energia perfeita para cada
        momento do seu dia.
      </p>
    </section>
  );
}

export default Home;