import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stages from './components/Stages';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stages />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
