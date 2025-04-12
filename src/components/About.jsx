import React from 'react';
import aboutData from '../data/about';

const About = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">

        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-5xl font-bold">{aboutData.title}</h1>
        </div>

        <div className="lg:w-2/3">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;