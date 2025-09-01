import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <GraduationCap className="w-16 h-16 text-amber-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 text-shadow leading-tight">
          The Graduation Ceremony
        </h1>
        
        <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-shadow leading-none mb-8">
          2025
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
          <p className="text-lg md:text-xl font-medium">
            @globalstanfordcampus
          </p>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

export default Hero;