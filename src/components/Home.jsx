import React from 'react';
import UpperSection from './UpperSection';
import HeroSection from './HeroSection';
import Content from './Content';
import Feature from './Feature';
import CombinedSection from './CombinedSection';


function Home() {
  return (
    <>
      <Feature />
      <UpperSection />
      <Content />
      <HeroSection />
      <CombinedSection />
    </>
  );
}

export default Home;
