import React from 'react';
import backgroundTrending from '../img/background-mobile.png';
import TrendingCard from '../components/TrendingCard';



function Trending() {
  return (
    <section 
    id="trending" 
    style={{ backgroundImage: `url(${backgroundTrending})` }}
    className="
    flex flex-col items-center gap-3
    min-h-[calc(100vh-96px)]
    pb-8 px-[4%]
    pt-[clamp(0px,5vw,32px)]
    bg-cover bg-no-repeat bg-center
    ">
      
      {/* title */}
      <h2 className="
      text-[2.5rem]
      uppercase
      text-neutral-8
      font-bold 
      text-center 
      relative          /* position: relative (necessário para o span) */
      mb-8"
      
      >
        Em alta
        <span className='
        block
        w-[60px]
        h-[4px]
        bg-primary-1
        rounded-[30px]
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2'>

        </span>
        </h2>

      <TrendingCard />

    </section>
  );
}

export default Trending;
