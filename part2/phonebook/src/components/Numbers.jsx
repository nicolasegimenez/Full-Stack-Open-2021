import React from "react";
const Numbers = ({ persons, deletePerson }) => (
  <div>
    <h3>Numbers</h3>
    <ul>
      {Array.isArray(persons)
        ? persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number} 
		    <button onClick={() => deletePerson(person.id)}> Deleted</button>
            </li>
          ))
        : []}
    </ul>
  </div>
);
export default Numbers;
