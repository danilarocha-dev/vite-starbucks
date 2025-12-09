import React from 'react';
import ProductCard from '../components/ProductCard';
import product1 from '../img/products/1.png';
import product2 from '../img/products/2.png';
import product3 from '../img/products/3.png';
import product4 from '../img/products/4.png';
import cardBackground from "../img/products/background.png";

// Componente simples para replicar o estilo do título (adaptado de steps anteriores)
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

// Dados mockados dos 4 cards
const productsData = [
  { 
    id: 1, 
    imgSrc: product1, 
    title: 'Moccha Chocolate', 
    subtitle: 'O Clássico Refrescante',
    description: 'Combinação rica de chocolate, espresso, leite vaporizado e uma cobertura de caramelo, irresistível.', 
    price: 20.00 
  },
  { 
    id: 2, 
    imgSrc: product2,
    title: 'Moccha Morango', 
    subtitle: 'Doce e Envolvente',
    description: 'A combinação surpreendente de café com a doçura e acidez do morango.', 
    price: 18.90 
  },
  { 
    id: 3, 
    imgSrc: product3, 
    title: 'Moccha Café', 
    subtitle: 'A Lenda Cremosa',
    description: 'Para quem ama café em dobro! Um moccha puro e intenso com camadas de espresso, leite e caramelo, garantindo um sabor potente e aveludado, ideal para um despertar.', 
    price: 21.50 
  },
  { 
    id: 4, 
    imgSrc: product4,
    title: 'Moccha Manga', 
    subtitle: 'Para Acompanhar',
    description: 'Uma explosão tropical. O sabor exótico e suculento da manga misturado com a cremosidade do moccha, coberto com chantilly e calda de caramelo. Uma novidade vibrante.', 
    price: 22.90 
  },
];

function Products() {
  return (
    <section className="bg-app-theme min-h-screen pt-20 bg-primary-1">
      <div className="container mx-auto px-4 py-8">
        
        {/* Título da Página */}
        <h1 className="text-4xl font-extrabold text-neutral-8 text-center mb-10 border-b-4 border-[#00704A] pb-3 inline-block mx-auto">
          Nosso Menu Completo
        </h1>

        {/* Grade de Produtos (products-cards) */}
        <div className="products-cards flex flex-wrap -m-4">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              imgSrc={product.imgSrc}
              title={product.title}
              description={product.description}
              price={product.price}
              
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;