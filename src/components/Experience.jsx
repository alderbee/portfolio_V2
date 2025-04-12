import React from 'react';
import experienceData from '../data/experience';

const Experience = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Experience</h1>
        </div>

        <div className="lg:w-2/3 space-y-8">
          {experienceData.map((experience, index) => (
            <div key={index} className="p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row ">
              <div className="md:w-2/2">
                <h1 className="font-bold">{experience.company}</h1>
                <h2>{experience.title}</h2>
              </div>

              <div className="md:w-1/3 mb-4 md:mb-0">
                <p className="text-md font-medium">{experience.duration}</p>
                <p className="text-sm">{experience.location}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
