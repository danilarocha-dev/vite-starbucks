import React from 'react';

function ProductCard({ imgSrc, cardBackground, main, flavor, description, }) {
  
  const cardContainerStyle = {
    backgroundImage: `url(${cardBackground})`,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
        top: "-70px", 
        filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))",
    };

  return (
    <section className="w-full max-w[332px] md:max-w-[300px]">

      {/* Container do Card */}
      <div className="flex flex-col items-center justify-center p-4 rounded-[50px] bg-primary-1 bg-cover bg-no-repeat bg-center"
      style={cardContainerStyle}
      >
        
        {/* Imagem (replicando o estilo da imagem flutuante) */}
        <div className="product-image w-full flex justify-center">
          <img 
            src={imgSrc} 
            alt={`${main} ${flavor}`}
            // width: 300px (mobile) | width: 250px (desktop)
            className="relative w-[300px] md:w-[250px]"
            style={imageStyle}
          />
        </div>

        {/* Conteúdo do Texto */}
        <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)]"> 

          <div>
            <h3 className="text-neutral-0 text-[1.8rem] font-bold flex flex-col items-center ">
              {main}
            </h3>

            <span className='text-secundary-1 text-[1.2rem] font-medium'>
              {flavor}
            </span>

            <p className="text-sm text-neutral-0 mb-4 h-10 overflow-hidden line-clamp-2">
              {description}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ProductCard;