import React from 'react';
import TrendingCard from '../components/TrendingCard';
import card1 from '../img/trending/card1.png'
import card2 from '../img/trending/card2.png'
import card3 from '../img/trending/card3.png'

const Trending = () => {
  return (
    <section id="trending" 
    className="bg-app-theme py-[32px] px-[4%] flex flex-col items-center gap-8 min-h-[calc(100vh-96px)] md:justify-center"
    >

      <div className='flex flex-col gap-8 w-full items-center md:flex-row md:flex-wrap md:justify-center md:gap-6'>

      <TrendingCard
      imgSrc={card1}
      title="Cappuccino"
      flavor="Avelã" />

      <TrendingCard
      imgSrc={card2}
      title="Cappuccino"
      flavor="Pistache" />

      <TrendingCard
      imgSrc={card3}
      title="Cappuccino"
      flavor="Morango" />

      </div>

    </section>
  );
}

export default Trending;
