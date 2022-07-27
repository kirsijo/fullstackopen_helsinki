import WeatherInfo from "./WeatherInfo";

const CountryInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>capital: {props.capital}</p>
      <p>area: {props.area}</p>
      <br />
      <p>languages</p>
      <ul>
        {Object.values(props.data.languages).map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <img src={props.flag} alt={props.name}></img>
      <WeatherInfo capital={props.capital} />
    </div>
  );
};

export default CountryInfo;
