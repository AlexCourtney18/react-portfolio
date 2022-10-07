import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main style={{ backgroundColor: "0b2545" }}>
        <div>
          <ContactForm></ContactForm>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
