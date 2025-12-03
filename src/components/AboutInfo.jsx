import React from 'react';

const AboutInfo = ({ title, highlightedTitle, description, highlightedDescription, className = '' }) => {
 
  return (
    <div className={`p-7 rounded-[20px] bg-primary-1 shadow-md ${className}`}>
      
      <h3 className="text-neutral-0 text-[1.8rem] mb-1 font-poppins font-bold">
        {title} <span className="text-secundary-1">{highlightedTitle}</span>
      </h3>

      <p className="text-neutral-0 text-[1rem] font-poppins">
        {description}
        {highlightedDescription && (
          <span className="text-secundary-1 font-semibold"> {highlightedDescription}</span>
        )}
      </p>
    </div>
  );
};

export default AboutInfo;