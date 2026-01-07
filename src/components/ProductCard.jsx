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
    <div className="w-full max-w[332px] md:max-w-[300px]">

      {/* Container do Card */}
      <div className="flex flex-col items-center justify-center p-4 pb-8 rounded-[50px] bg-primary-1 bg-cover bg-no-repeat bg-center"
      style={cardContainerStyle}
      >
        
        {/* Imagem (replicando o estilo da imagem flutuante) */}
        <div className="product-image w-full flex justify-center">
          <img 
            src={imgSrc} 
            alt={`${main} ${flavor}`}
            // width: 300px (mobile) | width: 250px (desktop)
            className="relative -top-[70px] w-[300px] md:w-[250px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.2)]"
            style={imageStyle}
          />
        </div>

        {/* Conteúdo do Texto */}
        <div className="flex flex-col items-center mt-[-70px] text-center"> 

            <h3 className="text-neutral-0 font-poppins text-[1.8rem] leading-tight font-bold flex items-center mb-4">
              {main} <span className='text-secundary-1 text-[1.8rem] font-medium normal-case ml-2'>{flavor}</span>
            </h3>

            <p className="text-base text-neutral-0 font-poppins leading-relaxed px-2">
              {description}
            </p>
          
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;