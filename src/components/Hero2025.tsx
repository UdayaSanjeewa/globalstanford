import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero2025: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          // backgroundImage: 'url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          backgroundImage: 'url("/2025.jpeg")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center text-white">
        <div className="flex justify-center mb-8">
          <GraduationCap className="w-16 h-16 text-amber-400" />
        </div>
        
        <h1 className="mb-4 text-4xl font-light leading-tight md:text-6xl lg:text-7xl text-shadow">
          The Graduation Ceremony
        </h1>
        
        <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-shadow leading-none mb-8">
          2025
        </div>
        
        <div className="inline-block px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm">
          <p className="text-lg font-medium md:text-xl">
            @globalstanfordcampus
          </p>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

export default Hero2025;