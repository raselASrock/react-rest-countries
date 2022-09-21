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
      {
        // countries.map(country => console.log(country))
        countries.map(country => <Country name ={country.name.common} population = {country.population} officialName = {country.name.official}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h2>Country Name: {props.name}</h2>
      <h2>Official Name: {props.officialName}</h2>
      <h4>Total Population: {props.population}</h4>
    </div>
  )
}
export default App;
