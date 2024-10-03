import React from 'react';
import Header from './Componentes/Header';
import Inicio from './Componentes/Inicio';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='divbody'>
      <Inicio />
      </div>      
      <Footer />
    </div>
  );
}

export default App;
