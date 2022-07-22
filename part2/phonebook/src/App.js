import { useState } from "react";
import Number from "./Number";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearch] = useState("");

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
      <form onSubmit={checkListed}>
        <div>
          filter shown with:
          <input defaultValue={searchValue} onChange={search} />
        </div>
        <br />
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {searchFilter.map((name) => (
          <Number key={name.id} name={name.name} number={name.number} />
        ))}
      </div>
    </>
  );
};

export default App;
