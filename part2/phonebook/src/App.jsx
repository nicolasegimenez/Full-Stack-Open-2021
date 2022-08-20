import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.jsx";
import NewContact from "./components/NewContact.jsx";
import Numbers from "./components/Numbers.jsx";
import personServices from "./services/persons";
import TrueMessage from './components/TrueMessage.jsx';
import ErrorMessage from './components/ErrorMessage.jsx'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findPerson, setFindPerson] = useState([
    { name: "", id: 11, user: "" },
  ]);
  const [trueMessage, setTrueMessage]= useState('')

  const [idName, setIdName] = useState([]);
  const [phoneName, setPhoneName] = useState(null);
  const [view, setView] = useState(false)
  const [msgError, setMsgError] =useState('')
  const [viewError, setViewError] = useState(null)
  useEffect(() => {
    personServices.getAll().then((response) => setPersons(response.data));
  }, []);

  const arrayPersons = persons.map((person) => person.name);
  const handleFindPerson = (event) => {
    setFindPerson(event.target.value);
    const finder = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFindPerson(finder);
  };

  const addName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    let findName = arrayPersons.includes(nameObject.name);

    if (findName) {
      alert(nameObject.name + " is already added to phonebook");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  //traemos la data
  useEffect(() => {
    personServices.getNumber(newName).then((response) => {
      setPhoneName(response.data.map((data) => data.name));

      setIdName(response.data.map((data) => data.id));
    });
  }, [newName]);
  //Post numbers to back-end
  const handlePost = (e) => {
    e.preventDefault();

    const contactObject = {
      name: newName,
      number: newNumber,
    };
    const EditObject = {
      name: newName,
      number: newNumber,
    };
    if (phoneName.length > 0) {
      window.confirm(`${phoneName} already exist. Do you like edit?`);

      personServices
        .edit(idName, EditObject)
        .then((response) => console.log(response));
      personServices.getAll().then((response) => setPersons(response.data));
    } else {
      personServices.create(contactObject).then((response) => {
        setPersons(persons.concat(response.data));
	      setView(true)
      setTrueMessage(`Added ${newName}`)
	      setTimeout(() => {
		  ('timeOut')
	       setTrueMessage(null)
	      }, 2000)
      });
    }
      
        setNewName("");
        setNewNumber("");
      
  };
  const deletePerson = (id) => {
	  personServices.deleteId(id).then((response) => {
		  setMsgError(response)
		  setViewError(true)
	  })
	    setTimeout(() => {
          setMsgError(null)
        }, 2000)
        console.log(viewError)

    personServices.getAll().then((response) => setPersons(response.data));
  };
  return (
    <div>
      <Filter handleFindPerson={handleFindPerson} findPerson={findPerson} />
      {viewError ? <ErrorMessage message = {msgError}/>: []}
      {view ? <TrueMessage  message= {trueMessage}/> : []
      }
      <NewContact
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        handlePost={handlePost}
      />
      <Numbers persons={persons} deletePerson={deletePerson} />
    </div>
  );
};
export default App;
