import Number from "./Number";

const PersonList = (props) => {
  return (
    <div>
      {props.people.map((name) => (
        <div key={name.id}>
          <Number name={name.name} number={name.number} />
          <button value={name.id} onClick={props.deleteNumber}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
