import { useState } from "react";
import Number from "./Number";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [isListed, setIsListed] = useState(false);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
  };

  const checkListed = (event) => {
    event.preventDefault();
    let result = persons.filter((person) => person.name === newName);
    if (result.length === 0) {
      addNumber();
    } else {
      alert("this number is already on the list");
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={checkListed}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((name) => (
          <Number key={name} name={name.name} />
        ))}
      </div>
    </>
  );
};

export default App;
