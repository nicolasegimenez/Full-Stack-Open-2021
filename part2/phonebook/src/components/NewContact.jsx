import React from 'react';


const NewContact = ({addName, newName, handleNameChange, newNumber, handleNewNumber, handlePost}) =>{ 
  const err =(e)=>{
    e.preventDefault()
    newNumber.trim() ==="" ? alert('need post a number') : alert('need post a name')
  }
  return(
   <div>
	
      <h3> Add New Contact </h3>
      <form onSubmit ={event => addName}>
        <div>
		name: <input
		value = {newName}
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
          <button type="submit" onClick={newNumber.trim()=== "" || newName.trim() === "" ? err : handlePost}>add</button>
	  </div></form>
  </div>

  )
  
};


export default NewContact;
