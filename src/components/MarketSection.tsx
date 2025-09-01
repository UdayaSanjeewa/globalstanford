import React from 'react';

const MarketSection: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-12 section-fade-in">
          Celebration & Community
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed section-fade-in">
          Join us in celebrating this momentous occasion with fellow graduates, families, and faculty. 
          Experience the vibrant atmosphere of achievement as we honor the dedication and perseverance 
          that brought us to this special day. The ceremony brings together diverse voices and 
          stories, creating memories that will last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default MarketSection;