import Number from "./Number";

const PersonList = (props) => {
  return (
    <div>
      {props.people.map((name) => (
        <Number key={name.id} name={name.name} number={name.number} />
      ))}
    </div>
  );
};

export default PersonList;
