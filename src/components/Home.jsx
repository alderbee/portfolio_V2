import React from 'react';
import { useEffect, useState } from 'react';

const PHRASES = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (text.length < PHRASES[currentPhraseIndex].length) {
          setText((prev) => prev + PHRASES[currentPhraseIndex][text.length]);
        } else {
          setIsTyping(false);
        }
      } else {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, isTyping, currentPhraseIndex]);
  return (
    <span className="text-indigo-600 font-semibold block h-9 relative">
      <span className="absolute top-0 left-0">{text}</span>
      <span className="invisible">
        Full Stack Developer
      </span>
    </span>
  );
};

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center justify-between flex-col lg:flex-row lg:space-x-34">
        <div className="text-center lg:text-left lg:w-1/2 lg:ml-34">
          <h1 className="text-5xl font-semibold mb-4">I'm Amit Vajrashetti 👋</h1>
          <p className="text-2xl">
            Full-stack software engineer, crafting responsive user interfaces and building back
ends.
          </p>
          <p className="text-2xl font-semibold">

            <br />
            <Typewriter
            />
          </p>
        </div>

        <div className="lg:mt-0 lg:w-1/2">
          <img
            src="././profile.png"
            alt="Amit"
            className="rounded-full shadow-lg w-80 h-80 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
