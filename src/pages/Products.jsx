import React from 'react';
import ProductCard from '../components/ProductCard';
import product1 from '../img/products/1.png';
import product2 from '../img/products/2.png';
import product3 from '../img/products/3.png';
import product4 from '../img/products/4.png';
import cardBackground from "../img/products/background.png";


const SectionTitle = ({ children }) => {
    
    return (
        <h2 className="text-[2.5rem] uppercase text-[#1e0e05] font-bold relative pb-1">
            {children}

            <span
                className="block w-[60px] h-1 bg-[#34815d] absolute bottom-0 rounded-full"
                aria-hidden="true"
            ></span>
        </h2>
    );
};

// Dados dos 4 cards
const productsData = [
  { 
    id: 1, 
    imgSrc: product1, 
    main: 'Moccha',
    flavor: 'Chocolate', 
    description: 'Combinação rica de chocolate, espresso, leite vaporizado e uma cobertura de caramelo, irresistível.', 
  },

  { 
    id: 2, 
    imgSrc: product2,
    main: 'Moccha', 
    flavor: 'Morango',
    description: 'A combinação surpreendente de café com a doçura e acidez do morango.',  
  },

  { 
    id: 3, 
    imgSrc: product3, 
    main: 'Moccha', 
    flavor: 'Café',
    description: 'Para quem ama café em dobro! Um moccha puro e intenso com camadas de espresso, leite e caramelo, garantindo um sabor potente e aveludado, ideal para um despertar.',   
  },

  { 
    id: 4, 
    imgSrc: product4,
    main: 'Moccha', 
    flavor: 'Manga',
    description: 'Uma explosão tropical. O sabor exótico e suculento da manga misturado com a cremosidade do moccha, coberto com chantilly e calda de caramelo. Uma novidade vibrante.', 
    
  },
];

function Products() {
  return (
    <section id='products' 
    className="bg-app-theme flex flex-col items-center gap-[58px] py-12 px-[-8%] md-min-h-screen md:gap-[78px]">

      <div className="container mx-auto px-4 py-8">
        
        {/* Título da Página */}
        <h1 className="text-4xl font-extrabold text-neutral-8 text-center mb-10 border-b-4 border-[#00704A] pb-3 inline-block mx-auto">
          Nosso Menu Completo
        </h1>

        {/* Grade de Produtos (products-cards) */}
        <div className="products-cards flex flex-col gap-[58px] md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              imgSrc={product.imgSrc}
              cardBackground={cardBackground} // Imagem de fundo dos grãos
              main={product.main}
              flavor={product.flavor}
              description={product.description}
              
              
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;