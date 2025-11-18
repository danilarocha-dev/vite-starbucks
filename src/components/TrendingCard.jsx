import React from 'react'

// Aceita props para tornar o card reutilizável para os 3 sabores
const TrendingCard = ({imgSrc, title, flavor }) => {
  return (
    // Equivalente a .trending-card { position: relative; }
    <section className='relative'>
      
      {/* Container da Imagem e Nota */}
      <div className="relative">
        {/* Imagem: width clamp replicado com valor arbitrário */}
        <img 
          src={imgSrc} 
          alt={`${title} ${flavor}`} 
          className="w-[clamp(300px,5vw,600px)] rounded-lg" 
        />

        {/* Equivalente a .trending-rate */}
        <div className="bg-neutral-0 absolute bottom-[70px] right-[30px] py-[5px] px-[10px] rounded-[5px]" >
          <p className="flex items-center gap-1 font-semibold text-neutral-8">
            5 <i className="fa-solid fa-star text-secundary-1 "></i>
          </p>
        </div>
      </div>

      {/* Equivalente a .trending-card-description */}
      <div className="flex flex-col text-center text-[1.3rem] font-semibold text-neutral-8 mt-1">
        
        {title}
        <span className="text-[1rem] font-medium text-neutral-7">
          {flavor}
        </span>
      </div>

    </section>
  )
}

export default TrendingCard
