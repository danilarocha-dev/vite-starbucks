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
    description: 'Uma experiência intensa. O equilíbrio perfeito entre chocolate encorpado, espresso marcante e leite vaporizado, finalizado com caramelo. Um clássico irresistível.', 
  },

  { 
    id: 2, 
    imgSrc: product2,
    main: 'Moccha', 
    flavor: 'Morango',
    description: 'Uma combinação surpreendente. O contraste do café com a doçura suave e a leve acidez do morango cria uma experiência única. Um sabor inesperado.',  
  },

  { 
    id: 3, 
    imgSrc: product3, 
    main: 'Moccha', 
    flavor: 'Café',
    description: 'Para os amantes de café. Camadas intensas de espresso, leite cremoso e caramelo realçam a força do moccha. Um sabor puro e marcante.',   
  },

  { 
    id: 4, 
    imgSrc: product4,
    main: 'Moccha', 
    flavor: 'Manga',
    description: 'Uma explosão tropical de sabores. O sabor exótico e suculento da manga misturado com a cremosidade do moccha. Uma novidade vibrante.', 
    
  },
];

function Products() {
  return (
    <section id='products' 
    className="bg-app-theme flex flex-col items-center gap-[58px] py-12 px-[-8%] md-min-h-screen md:gap-[78px]">

      <div className="container mx-auto px-4 py-8">

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