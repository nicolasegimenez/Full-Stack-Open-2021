import React, { useState, useEffect } from "react";
import axios from "axios";
import { createPortal } from "react-dom";
const App = () => {
  //in the country state you set the data
  const [country, setCountry] = useState([]);
  const [findCountry, setFindCountry] = useState("");

  //add a countryFind to facilitate the search in useEffect
  const handleButton = (event) => event.preventDefault();
  //1ero: Llamamos a la data con useEffect() responde un array de objetos
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all/").then((response) => {
      setCountry(response.data);
    });
  }, []);
  //guardamos todos los paises en un array llamado "countryName"
  const countryName = country.map((countries) => countries.name.common);

  //Algoritmo de busqueda multilineal busca el array[0] tipo string
  //findCountry es una array asi que si lo pones de lleno te tira un error. Sin embargo no me gusta este codigo

  //Objecto Encontrado
  const objectFind = country.find(
    (element) => element.name.common === findCountry[0]
  );
  console.log("name", objectFind);
    // Array para los lenguajes:

  //Funcion que filtra los nombres de los paises con el onChange de handle find country

  const handleFindCountry = (event) => {
    const finder = countryName.filter((namesFind) =>
      namesFind.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFindCountry(finder);
  };


  return (
    <div>
      <h1>Countries App </h1>
      <form onSubmit={handleButton}>
        <input onChange={handleFindCountry}></input>
        <button type="submit">Find</button>
      </form>
      <div>
        <ul>
          {Array.isArray(findCountry)
            ? findCountry.map((findCountries) => (
                <>
                  <h2>{objectFind.name.common}</h2>
                  <li>Capital: {objectFind.capital} </li>
                  <li>Population: {objectFind.population}</li>
                  <h2>Languages</h2>
                 {Object.keys(objectFind.languages).map(function(key){ 
                    return ( <li>{objectFind.languages[key]}</li>
                    ) 
                  } )}
                  <img src={objectFind.flags.png}></img>
                </>
              ))
            : []}
        </ul>
      </div>
    </div>
  );
};
export default App;
