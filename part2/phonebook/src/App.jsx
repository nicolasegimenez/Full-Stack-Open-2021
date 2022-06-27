import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id:1  },
    { name: 'Ada Lovelace', number: '39-44-5323523', id:2 },
    { name: 'Dan Abramov', number: '12-43-234345', id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id:4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [findPerson, setFindPerson] = useState('') 
  const  arrayPersons = persons.map((person)=> person.name)
  const handleFindPerson = (event) => {
      setFindPerson(event.target.value) 
  }
  const name = findPerson
  const personsToShow = arrayPersons.includes(name)
		? arrayPersons.reduce((nameFind) => nameFind, name)
	        : console.log('Hey Baby')
	        console.log( arrayPersons.includes(name))
   
  const addName = (event) => {

	  event.preventDefault()

	 const nameObject = {
		 name: newName,
		 id: persons.length + 1,
		 number: newNumber
	 }

	  let findName = arrayPersons.includes(nameObject.name)

	  console.log(findName)
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
      <h2>Phonebook</h2>
      Filter shown with: 
      <form>
      <div>
	      <input onChange = {handleFindPerson}/>
	      <li> {personsToShow}</li>
      </div>
      </form>
      <div> <ul>

	  </ul> </div>

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
}

export default App
