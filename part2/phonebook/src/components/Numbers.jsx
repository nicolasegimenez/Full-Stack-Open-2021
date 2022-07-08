import React from 'react';
  const Numbers = ({persons}) => (
	 <div>
      <h3>Numbers</h3>
      <ul>
	      {Array.isArray(persons) ? persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>) : [] }
      </ul>
    </div>)
export default Numbers;
