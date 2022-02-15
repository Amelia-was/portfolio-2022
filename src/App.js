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
    <section className='page'>

      <header>
        <h1>amelia wasowski</h1>
        <Nav
          navLinks={navLinks}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </header>

      <main>
        {renderPage()}
      </main>

      <Footer />

    </section>
  );
}

export default App;
