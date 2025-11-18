import React from 'react';
import TrendingCard from '../components/TrendingCard';
import backgroundTrending from '../img/background-mobile.png';
import card1 from '../img/trending/card1.png'
import card2 from '../img/trending/card2.png'
import card3 from '../img/trending/card3.png'



const Trending = () => {
  return (
    <section 
    id="trending" 
    style={{ backgroundImage: `url(${backgroundTrending})` }}
    className="py-[32px] px-[4%] flex flex-col gap-3 items-center min-h-[calc(100vh-96px)]
    pt-[clamp(0px,5vw,32px)]
    bg-cover bg-no-repeat bg-center
    ">

      <div className=' flex flex-col gap-8'>

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
