import React from 'react';
import './App.css';
import Exercice1 from './components/Exercice1';
import Exercice2 from './components/Exercice2';
import UseFetchComponent from './components/useFetch'; // Nom corrigé
import Exercice4 from './components/Exercice4';

function App() {
  return (
    <div className="App">
      <h1>Exercice 1</h1>
      <Exercice1 />

      <h1>Exercice 2</h1>
      <Exercice2 />

      <h1>Exercice 3</h1>
      <UseFetchComponent /> {/* Utilisation du nom corrigé */}

      <h1>Exercice 4</h1>
      <Exercice4 />
    </div>
  );
}

export default App;