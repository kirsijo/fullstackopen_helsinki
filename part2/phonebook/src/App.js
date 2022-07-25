import { useState, useEffect } from "react";
import PersonList from "./PersonList";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import axios from "axios";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearch] = useState("");

  const gettingPeople = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(gettingPeople, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNumber = (event) => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
  };

  const checkListed = (event) => {
    event.preventDefault();
    let result = persons.filter((person) => person.name === newName);
    if (result.length === 0) {
      addNumber();
    } else {
      alert(`${newName} is already on the list`);
    }
  };

  const search = (event) => {
    setSearch(event.target.value);
  };

  const searchFilter = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue} search={search} />
      <h3>Add a new number</h3>
      <PersonForm
        checkListed={checkListed}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList people={searchFilter} />
    </>
  );
};

export default App;
