import React from 'react'
import imgCard1 from '../img/trending/card1.png';
import imgCard2 from '../img/trending/card2.png';
import imgCard3 from '../img/trending/card3.png';

const TrendingCard = () => {
  return (
    <section 
    className='
    py-8 px-[4%]
    flex
    flex-col
    items-center
    gap-8
    min-h-[clamp(100vh-96)]
    '>
     
     <img
     src={imgCard1}
     alt='card1'
     className='
     relative
     '
      />

      <img
     src={imgCard2}
     alt='card1'
      />

      <img
     src={imgCard3}
     alt='card1'
      />
     

    </section>
  )
}

export default TrendingCard
