import React from 'react';
import ProductCard from '../components/ProductCard';

// Dados mockados dos 4 cards
const productsData = [
  { 
    id: 1, 
    imgSrc: '/images/cafe-gelado.jpg', 
    title: 'Café Gelado Premium', 
    subtitle: 'O Clássico Refrescante',
    description: 'Nosso blend especial servido com gelo, perfeito para dias quentes e energizantes. Uma escolha popular!', 
    price: 15.00 
  },
  { 
    id: 2, 
    imgSrc: '/images/mocha.jpg',
    title: 'Mocha de Caramelo', 
    subtitle: 'Doce e Envolvente',
    description: 'Combinação rica de chocolate, espresso, leite vaporizado e uma cobertura de caramelo, irresistível.', 
    price: 18.90 
  },
  { 
    id: 3, 
    imgSrc: '/images/frappe.jpg', 
    title: 'Frappuccino de Baunilha', 
    subtitle: 'A Lenda Cremosa',
    description: 'Bebida batida com gelo e um toque intenso de baunilha, finalizada com chantilly e calda.', 
    price: 21.50 
  },
  { 
    id: 4, 
    imgSrc: '/images/sanduiche.jpg',
    title: 'Sanduíche de Queijo e Presunto', 
    subtitle: 'Para Acompanhar',
    description: 'Opção de lanche leve e saboroso, feito na chapa e ideal para um café da manhã ou tarde.', 
    price: 12.00 
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