import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout({children}){
  return (
    <div>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout;