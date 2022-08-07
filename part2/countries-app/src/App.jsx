import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  //Seteamos el estado del componente
  const [country, setCountry] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  

  //Llamamos a la data con useEffect() responde un array de objetos
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all/").then((response) => {
      setCountry(response.data);
    });
  }, []);

  //guardamos todos los paises que encontramos en un array llamado "countryName"
  const countryName = country.map((countries) => countries.name.common)
 
  //Funcion que filtra los nombres de los paises con el onChange

  const handleFindCountry = (event) => {
    const finder = countryName.filter((namesFind) =>
      namesFind.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFindCountry(finder);
    console.log(finder)
    
  };

  //Objecto Encontrado
  const objectFind = country.find(
    (element) => element.name.common === findCountry[0]
  );

  //Creamos un boton que evita el código
  const handleButton = (event) => event.preventDefault();

  //Creamos el botón de Show

  const countryShow = (countryLi) => {
    setFindCountry([countryLi])
    console.log(findCountry);
   
  };

  return (
    <div>
      <h1>Countries App </h1>
      <form onSubmit={handleButton}>
        <input onChange={handleFindCountry}></input>
        <button type="submit">Find</button>
      </form>

      <div>
        {findCountry.length > 10 ? (
          <p>Soo many match, specify another filter </p>
        ) : findCountry.length > 1 && findCountry.length <= 5 ? (
          <ul>
            {findCountry.map((countryLi) => (
              <li>
                {countryLi}{" "}
                <button onClick={() => countryShow(countryLi)}>Show</button>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {findCountry
              ? findCountry.map(() => (
                  <>
                    <h2>{objectFind.name.common}</h2>
                    <li>Capital: {objectFind.capital} </li>
                    <li>Population: {objectFind.population}</li>
                    <h2>Languages</h2>
                    {Object.keys(objectFind.languages).map(function (key) {
                      return <li>{objectFind.languages[key]}</li>;
                    })}
                  </>
                ))
              : []}
            <br />
            <img src={objectFind ? objectFind.flags.png : []}></img>
          </ul>
        )}
      </div>
    </div>
  );
};
export default App;
