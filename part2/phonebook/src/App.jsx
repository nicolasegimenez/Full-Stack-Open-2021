import React, { useState, useEffect } from 'react';
import Filter from './components/Filter.jsx';
import NewContact from './components/NewContact.jsx';
import Numbers from './components/Numbers.jsx'; 
import axios from 'axios';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
	const [findPerson, setFindPerson] = useState([
		{name: '', id: 11,  user: ''}
      
	]) 
 useEffect(() => {
	 console.log('effect')
	 axios
		 .get('http://localhost:3001/persons')
	         .then(response =>{
		  console.log('promise fulfilled')
		  setPersons(response.data)
	       })
	 
	}, [])
  const  arrayPersons = persons.map((person)=> person.name)
  const handleFindPerson = (event) => {
		setFindPerson(event.target.value)
		const finder = persons.filter((person) =>
	        person.name.toLowerCase().includes(event.target.value.toLowerCase()))
		setFindPerson(finder)
  }
	
  const addName = (event) => {

	  event.preventDefault()

	 const nameObject = {
		 name: newName,
		 id: persons.length + 1,
		 number: newNumber
	 }

	  let findName = arrayPersons.includes(nameObject.name)

	  if (findName){
		  alert(nameObject.name +  ' is already added to phonebook')}
	  else{
	  setPersons(persons.concat(nameObject))
	  setNewName('')}

  }
  const handleNameChange = (event) => {
	  
	 setNewName(event.target.value)}
  
  const [newNumber, setNewNumber] = useState('')
   

  const handleNewNumber =(event) => {
		setNewNumber(event.target.value)
	}
  return (
	  <div>
		  <Filter handleFindPerson ={handleFindPerson}  findPerson = {findPerson}
	  />

		  <NewContact addName = {addName} newName ={newName} handleNameChange ={handleNameChange} newNumber= {newNumber} handleNewNumber = {handleNewNumber}/>
		  <Numbers persons = {persons} / >
	    </div>
  )
};
export default App
