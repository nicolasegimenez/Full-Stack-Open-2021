import React from 'react';
const NewContact = ({addName, newName, handleNameChange, newNumber, handleNewNumber}) => (
   <div>
	{console.log(handleNewNumber)}
      <h3> Add New Contact </h3>
      <form onSubmit ={event => addName}>
        <div>
		name: <input
		defaultValue = {newName}
		onChange={ handleNameChange}
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
	  </div></form>
  </div>

  );


export default NewContact;
