import Navbar from './components/Navbar';
import UpperSection from './components/UpperSection';
import HeroSection from './components/HeroSection';
import Content from './components/Content';
import Feature from './components/Feature';
import CombinedSection from './components/CombinedSection';
import CookiePopup from './components/CookiePopup';
import Footer from './components/Footer';






import React from 'react'; // Make sure to import React

function App() {
  return (
    <div>
      <Navbar />
      
      <Feature />
      <UpperSection />
      <Content />
      <HeroSection />
      <CombinedSection />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default App;
