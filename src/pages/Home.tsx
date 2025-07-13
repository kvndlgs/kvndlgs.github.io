import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
};

export default Home;