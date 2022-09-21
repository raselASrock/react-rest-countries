import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  // Step: 1 use useState
  const [countries, setCountries] = useState([]);
  // Step: 2 write useEffect
  useEffect( () => {
    // Step: 3 Use fetch URL
    fetch('https://restcountries.com/v3.1/all')
    .then( res => res.json())
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h1>Visiting Every Country With Me.</h1>
      <h2>Experience With Me. Let's GO!!!!!!!!</h2>
      <h4>Available Countries: {countries.length}</h4>
    </div>
  )
}

export default App;
