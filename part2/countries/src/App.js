import { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";

const App = (props) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const gettingData = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  };

  useEffect(gettingData, []);

  const searchUpdateHandler = (e) => {
    setSearchData(e.target.value);
  };

  const countryFilter = data.filter((country) => {
    return country.name.common.toLowerCase().includes(searchData.toLowerCase());
  });

  const countryButtonHandler = (e) => {
    setSearchData(e.target.value);
  };

  if (countryFilter.length > 10) {
    return (
      <>
        <form onChange={searchUpdateHandler}>
          Search for countries
          <input></input>
        </form>
        <p>Too many matches, specify another filter</p>
      </>
    );
  }

  if (countryFilter.length <= 10 && countryFilter.length > 1) {
    return (
      <>
        <form onChange={searchUpdateHandler}>
          Search for countries
          <input></input>
        </form>
        <ul>
          {countryFilter.map((c) => (
            <li key={c.name.common}>
              {c.name.common}
              <button value={c.name.common} onClick={countryButtonHandler}>
                Show
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <form onChange={searchUpdateHandler}>
        Search for countries
        <input></input>
      </form>
      <div>
        {countryFilter.map((c) => (
          <CountryInfo
            data={c}
            name={c.name.common}
            key={c.name.common}
            area={c.area}
            capital={c.capital}
            flag={c.flags.png}
          />
        ))}
      </div>
    </>
  );
};

export default App;
