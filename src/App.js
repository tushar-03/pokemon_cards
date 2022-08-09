import './App.css';
import Header from './Header';
import Card from './Card';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import React from 'react';

function App() {
  const [pokemonname, updatepokemon] = React.useState('');

  return (

    <Router>
      <div className="App">


        <Routes>

          <Route path="/" element={<div> <Header /><Home updateName={updatepokemon} name={pokemonname} /></div>} />
          <Route path="/Card" element={<div><Header /><Card name={pokemonname} /></div>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
