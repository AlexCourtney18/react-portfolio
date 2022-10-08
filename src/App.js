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
    { name: 'Portfolio'},
    { name: 'Resume'}
  ])

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main style={{ background: "0b2545" }}>
        <div>
        {!contactSelected ? (
            <>
              <About></About>
              <Project></Project>
              <Resume></Resume>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
