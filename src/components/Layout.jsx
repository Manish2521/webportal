// Layout.jsx

import React from 'react';
import Navbar from './Navbar';
import CookiePopup from './CookiePopup';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CookiePopup />
      <Footer />
    </>
  );
}

export default Layout;
