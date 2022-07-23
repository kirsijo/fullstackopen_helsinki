const PersonForm = (props) => {
  return (
    <form onSubmit={props.checkListed}>
      <br />
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <br />
      <div>
        number:
        <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
