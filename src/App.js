import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import ContactForm from './components/Contact';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div style={{ width: "100%" }}>
      <Header></Header>
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
