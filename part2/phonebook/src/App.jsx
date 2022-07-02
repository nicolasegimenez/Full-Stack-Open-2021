import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id:1  },
    { name: 'Ada Lovelace', number: '39-44-5323523', id:2 },
    { name: 'Dan Abramov', number: '12-43-234345', id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id:4 }
  ]) 
  const [ newName, setNewName ] = useState('')
	const [findPerson, setFindPerson] = useState([
		{name: '', id: 11,  user: ''}
      
	]) 
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
		  <h1>Phonebook</h1>
		  <div>
		  Filter for name: 
			  <form>
				  <input 
				  
				  onChange = {handleFindPerson}
			  />
			  </form>
			  <ul>
				  

				  {findPerson.map((person)=> <li key= {person.id}> {person.name} {person.number}</li>)}

				    

			  </ul>
		  </div>

      <h3> Add New Contact </h3>
      <form onSubmit ={addName}>
        <div>
		name: <input
		value = {newName}
		onChange={handleNameChange}
	/>
	 <div>
		 number: <input
		 value = {newNumber}
	         onChange = {handleNewNumber}
       />
	 </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
	      {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li> )}
      </ul>
    </div>
  )
};
export default App
