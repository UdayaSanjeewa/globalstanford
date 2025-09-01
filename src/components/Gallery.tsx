import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Graduation Ceremony Hall",
      caption: "Grand Auditorium"
    },
    {
      src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Graduate with Diploma",
      caption: "Achievement Moment"
    },
    {
      src: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    }
  ];

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-16 text-center section-fade-in">
          Memorable Moments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="card-hover rounded-2xl overflow-hidden bg-white shadow-lg section-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;