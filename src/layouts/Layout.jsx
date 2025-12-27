import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Scene3D from '../components/Scene3D';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen text-slate-900 dark:text-white transition-colors duration-500">
            <Navbar />
            
            <main className="relative z-10">
                {children}
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;
