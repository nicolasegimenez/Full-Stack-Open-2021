import React, { useState, useEffect } from "react";
import axios from "axios";
import Temperature from "./Components/Temperature";

const App = () => {
  //Set the  App State
  const [country, setCountry] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  const [weather, setWeather] = useState(null);

  //call weather api
  const API_END_POINT = "http://api.weatherstack.com/current?access_key=";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_COUNTRY = "&query=" + findCountry;

  useEffect(() => {
    console.log(findCountry);
    findCountry.length === 1
      ? axios.get(API_END_POINT + API_KEY + API_COUNTRY).then((response) => {
         
           setWeather(response.data);
        })
      : [];
  }, [findCountry]);

  //Call the data with useEffect() response a array object
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all/").then((response) => {
      setCountry(response.data);
    });
  }, []);

  //Save all the countries we find in a array named "countryName"
  const countryName = country.map((countries) => countries.name.common);

  //Function has filter the names of the countries in "OnChange"
  const handleFindCountry = (event) => {
    /*
     En el siguiente algoritmo:
     pasamos el e.target.value a lowercast
     pasamos the nameFind a lowercast
     buscamos dentro de names find que nombre coincide con el parametro
     filtramos countryName con la respuesta
     seteamos findCountry con finder
    */
    const finder = countryName.filter((namesFind) =>
      namesFind.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFindCountry(finder);
  };

  //Object Find
  const objectFind = country.find(
    (element) => element.name.common === findCountry[0]
  );

  //Prevent the page reload
  const handleButton = (event) => event.preventDefault();

  //Create Button Show

  const countryShow = (countryLi) => {
    setFindCountry([countryLi]);
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
            <br/>
            {weather ? <Temperature weather={weather}/> : []}
          </ul>
       
        )}
      </div>
    </div>
  );
};
export default App;
