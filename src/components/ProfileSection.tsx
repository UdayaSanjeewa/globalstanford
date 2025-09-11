import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 section-fade-in">
            <div className="overflow-hidden profile-image w-80 h-80 md:w-96 md:h-96 rounded-2xl">
              <img 
                src="/profile2024.jpeg"
                alt="Graduate Portrait"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left section-fade-in">
            <h2 className="mb-8 text-4xl font-light leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Academic Excellence<br />
              <span className="text-red-800">Achieved</span>
            </h2>
            
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Global Stanford Campus proudly celebrates the success of 500 graduates who earned degrees across Education, Management, IT, and Nursing. Their dedication and perseverance reflect the campus’s commitment to academic growth, international recognition, and preparing leaders for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;