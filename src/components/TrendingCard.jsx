import React from 'react'
import imgCard1 from '../img/trending/card1.png';
import imgCard2 from '../img/trending/card2.png';
import imgCard3 from '../img/trending/card3.png';

const TrendingCard = () => {
  return (
    <section>
     
     <img
     src={imgCard1}
     alt='card1'
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
