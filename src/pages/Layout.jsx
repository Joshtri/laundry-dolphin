import React from 'react';
import Navbar from '../components/Partials/Navbar';
import Footer from '../components/Partials/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
