import React from 'react';
  const Filter = ({handleFindPerson, findPerson}) => (
	  <div>
		  
	  
		  <h1>Phonebook</h1>
		  <div>
		  Filter for name: 
			  <form>
				  <input 
				  onChange = {handleFindPerson}/>
			  </form>
				  {Array.isArray(findPerson) ? findPerson.map((person)=> <li key= {person.id}> {person.name} {person.number}</li> ): []}   
		  </div>
	  </div> )
export default Filter
