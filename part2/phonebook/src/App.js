import { useState, useEffect } from "react";
import PersonList from "./PersonList";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import numberService from "./numbers";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearch] = useState("");

  useEffect(() => {
    numberService.getAll().then((initialList) => {
      setPersons(initialList);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNumber = () => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    numberService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deleteNumber = (event) => {
    event.preventDefault();
    const id = event.target.value;
    const nameFinder = persons.filter((i) => i.id === Number(id));
    const nameValues = Object.values(nameFinder)[0];
    if (window.confirm(`Are you sure you want to remove ${nameValues.name}?`)) {
      numberService.deleteNum(id);
      const delPerson = persons.filter((n) => n.id !== Number(id));
      setPersons(delPerson);
    }
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
      <PersonList people={searchFilter} deleteNumber={deleteNumber} />
    </>
  );
};

export default App;
