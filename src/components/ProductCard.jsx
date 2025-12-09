import React from 'react';


function ProductCard({ imgSrc, title, description, price }) {
  // Formata o preço para o padrão brasileiro (R$ X.XXX,XX)
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <section className="product-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      {/* Container do Card */}
      <div className="product-content bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-xl">
        
        {/* Imagem */}
        <div className="product-image h-48 sm:h-56 overflow-hidden">
          {/* A classe 'object-cover' garante que a imagem cubra o espaço mantendo a proporção */}
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover transition duration-300 hover:opacity-90"
          />
        </div>

        {/* Conteúdo do Texto */}
        <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)]"> 
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1 leading-snug truncate" title={title}>
              {title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-xl font-extrabold text-[#00704A]">
              {formattedPrice}
            </span>
            <button 
              className="bg-[#00704A] text-white py-1 px-3 rounded-full text-sm font-semibold hover:bg-[#005c3c] transition duration-200"
              aria-label={`Adicionar ${title} ao carrinho`}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;