import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 section-fade-in">
            <div className="profile-image w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Graduate Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left section-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8 leading-tight">
              Academic Excellence<br />
              <span className="text-red-800">Achieved</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Experience the culmination of years of dedication and hard work. Our graduates represent the future leaders, innovators, and change-makers who will shape tomorrow's world through their knowledge, passion, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;