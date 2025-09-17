import React from 'react';

const Gallery2025: React.FC = () => {
  const galleryImages = [
    {
      src: "/2025/img01.jpeg",
      alt: "Graduation Ceremony Hall",
      caption: "Grand Auditorium"
    },
    {
      src: "/2025/img02.jpeg",
      alt: "Graduate with Diploma",
      caption: "Achievement Moment"
    },
    {
      src: "/2025/img03.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img04.jpeg",
      alt: "Graduation Ceremony Hall",
      caption: "Grand Auditorium"
    },
    {
      src: "/2025/img05.jpeg",
      alt: "Graduate with Diploma",
      caption: "Achievement Moment"
    },
    {
      src: "/2025/img06.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img13.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img14.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img06.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img06.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img06.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    },
        {
      src: "/2025/img06.jpeg",
      alt: "Graduates Celebrating",
      caption: "Class of 2025"
    }
  ];

  return (
    <div className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl section-fade-in">
          Memorable Moments
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden bg-white shadow-lg card-hover rounded-2xl section-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="overflow-hidden aspect-square">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery2025;