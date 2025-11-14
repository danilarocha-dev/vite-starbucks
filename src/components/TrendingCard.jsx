import React from 'react'

function TrendingCard({ imgSrc, imgAlt, rating, title, subtitle }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 relative overflow-hidden transition-transform hover:scale-105">
      <img src={imgSrc} alt={imgAlt} className="w-full rounded-lg mb-4" />
      
      {/* Selo de Nota */}
      <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
        <p className="font-bold flex items-center gap-1 text-gray-800">
          {rating}
          <FaStar className="text-yellow-500" />
        </p>
      </div>

      {/* Descrição */}
      <p className="text-xl font-semibold text-gray-900">
        {title}
        <span className="block text-base font-normal text-gray-600">{subtitle}</span>
      </p>
    </div>
  );
}

export default TrendingCard
