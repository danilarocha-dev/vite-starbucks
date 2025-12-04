import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import product1 from '../img/products/1.png';
import product2 from '../img/products/2.png';
import product3 from '../img/products/3.png';
import product4 from '../img/products/4.png';

const PRODUCTS_DATA = [
  {
    id: 1,
    imagePath: product1,
    title: 'Moccha',
    subtitle: 'Chocolate',
  },
  {
    id: 2,
    imagePath: product2,
    title: 'Moccha',
    subtitle: 'Morango',
  },
  {
    id: 3,
    imagePath: product3,
    title: 'Moccha',
    subtitle: 'Café',
  },
  {
    id: 4,
    imagePath: product4,
    title: 'Moccha',
    subtitle: 'Manga',
  },
];

function Products () {

  return (
    <section id="products"
    className="bg-app-theme p-8 px-[4%] flex flex-col items-center gap-8"
    >
      
     <div className="products-cards">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.id} // Importante para o React (listas)
            imagePath={product.imagePath}
            title={product.title}
            subtitle={product.subtitle}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
