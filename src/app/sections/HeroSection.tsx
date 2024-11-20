import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../../public/HeroSection/martin-martz-5_LU55UmHYA-unsplash.jpg';
import HeroSocialLinks from '../components/heroSocialLinks';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={backgroundImage} 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority
        />
      </div>

      {/* Social Media Rectangle */}
      <HeroSocialLinks />

      {/* Gradient and Blur Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(255, 255, 255, 0.1)", 
          backdropFilter: "blur(3px)",
          zIndex: 1,
        }}
      ></div>

      {/* Centered Text */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-7xl font-medium mb-2 font-bricolage">Yash Tashildar</h1>
        <p className="md:text-xl text-lg">
          A Data-Driven SQL Developer specializing in Database Management, <br />
          Data Warehousing, and Optimization for Business Insights
        </p>
      </div>

      {/* Hidden on Mobile View, Visible on Medium Screens and Above */}
      <div className="hidden md:flex absolute bottom-10 right-5 space-x-10 text-sm text-gray-300 max-w-xl z-10">
        {/* Left Text */}
        <div className="max-w-sm">
          <p>
            SQL Developer with over a decade of experience in database design, data warehousing, and ETL processes.
          </p>
        </div>

        {/* Right Text */}
        <div className="max-w-sm">
          <p>
            Expertise in SQL, PostgreSQL, Oracle, and cloud platforms like AWS RDS and Azure SQL. Empowering organizations to make data-driven decisions.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 z-10">
        <a href="#next-section" className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
          <span className="animate-bounce text-lg">&#8595;</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
