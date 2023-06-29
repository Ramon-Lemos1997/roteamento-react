import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aula from './components/Aula';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path='/aulas/:id' element={<Aula />} />
          <Route path='/aulas/a' element={<div>Conteúdo</div>} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>Essa rota não existe</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
