import React, { useState, useEffect } from 'react'
import axios from 'axios'
const  App = () => {
const [country, setCountry] = useState([])
const [findCountry, setFindCountry] = useState('')
	//add a countryFind to facilitate the search in useEffect
const countryFind = findCountry
	const handleButton= (event) =>	
        event.preventDefault()

	useEffect( () => { 
	    console.log('effect')
	    axios
		  .get('https://restcountries.com/v3.1/all/')
		.then (response => {
		  setCountry(response.data)
		} )
	 }, []
	)
      
const countryName  = country.map((countries) => countries.name.common)
        console.log(findCountry.index)
	console.log("country", country)
	const countryBasic = findCountry.lenght === 1 ? country.find((countriesBasics) =>"Argentina"): console.log("waiting...")
const handleFindCountry = (event) => { 

	const finder = countryName.filter((namesFind) => namesFind.toLowerCase().includes(event.target.value.toLowerCase()))
	    setFindCountry(finder)
	}
return (
      <div>
 <h1>Countries App </h1>
 <form onSubmit = {handleButton}>
	 <input onChange = {handleFindCountry}></input>
	 <button type = "submit">Find</button>
 </form>
 <div>
   <ul>
   {Array.isArray(findCountry)? findCountry.map((findCountries) => <li>{findCountries}</li>) : []}

   </ul>

 </div>

 </div>
)
};
export default App
