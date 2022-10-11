import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Portfolio' },
    { name: 'Resume' }
  ])

  const [pageSelected, setPageSelected] = useState('About');

  return (
    <div style={{ width: "100%" }}>
      <Header
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Header>
      <main style={{ background: "0b2545" }}>
        <div>
          {pageSelected === 'About' ? (
            <About></About>
          ) : pageSelected === 'Portfolio' ? (
            <Project></Project>
          ) : pageSelected === 'Contact' ? (
            <ContactForm></ContactForm>
          ) : (
            <Resume ></Resume>
          )}
        </div>
      </main >
      <Footer></Footer>
    </div >
  );
}

export default App;
