import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const navLinks = ['About', 'Portfolio', 'Contact'];
  const [currentPage, setCurrentPage] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
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

      <footer>
        stuff
      </footer>

    </section>
  );
}

export default App;
