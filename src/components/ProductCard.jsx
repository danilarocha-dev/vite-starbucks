import React from 'react'

const ProductCard = ({ imagePath, title, subtitle  }) => {
  return (
    <section className='product-card'>
        
      {/* Responsável pelo estilo de fundo */}
      <img src={imagePath} alt={`Starbucks ${title} de ${subtitle}`} />

      <div className='product-content'>
        <h3>
            {title}
            <span>{subtitle}</span>
        </h3>

      </div>
      
    </section>
  )
}

export default ProductCard
