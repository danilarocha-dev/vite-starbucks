import React from 'react';

const AboutInfo = ({ title, highlightedTitle, description, highlightedDescription, descriptionSuffix, className = '' }) => {
 
  return (
    <div className={`p-6 rounded-[20px] bg-primary-2 shadow-md ${className}`}>
      
      {/* Título do Card */}
      <h3 className="text-neutral-0 text-[1.8rem] mb-1 font-poppins font-bold leading-tight">
        {title} <span className="text-secundary-1">{highlightedTitle}</span>
      </h3>

      {/* Descrição do Card */}
      <p className="text-neutral-0 text-[1rem] font-normal leading-relaxed font-poppins">
        {description}
        {highlightedDescription && (
          <span className="text-secundary-1 font-semibold"> {highlightedDescription}</span>
        )}
        {descriptionSuffix}
      </p>
    </div>
  );
};

export default AboutInfo;