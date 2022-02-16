import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const navLinks = ['About', 'Portfolio'];
  const [currentPage, setCurrentPage] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  }

  return (
    <section className='flex column justify-between align-center'>

      <header className='flex row justify-between align-center'>
        <h1>Amelia Wasowski</h1>
        <Nav
          navLinks={navLinks}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>

      <main className='flex row justify-center align-center align-content-center'>
        {renderPage()}
      </main>

      <Footer />

    </section>
  );
}

export default App;
