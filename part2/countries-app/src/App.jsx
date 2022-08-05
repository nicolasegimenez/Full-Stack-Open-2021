import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
//in the country state you set the data 
  const [country, setCountry] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  //add a countryFind to facilitate the search in useEffect
  const countryFind = findCountry;
  const handleButton = (event) => event.preventDefault();
  //Call a api restcountries used useEffect 
  useEffect(() => {
 
    axios.get("https://restcountries.com/v3.1/all/").then((response) => {
      setCountry(response.data);
    });
  }, []);
//Country Name is Array with 
  const countryName = country.map((countries) => countries.name.common);
 
  console.log("country", country.map(item => item.name.common));


//This is the function you need to be use return a lowercase element
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
            ? findCountry.map((findCountries) => (<li>{findCountries}</li>))
            : []}
        </ul>
      </div>
    </div>
  );
};
export default App;
