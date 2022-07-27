import axios from "axios";
import { useState, useEffect } from "react";

const WeatherInfo = (props) => {
  const [temperature, setTemperature] = useState("loading..");
  const [icon, setIcon] = useState("loading..");
  const [wind, setWind] = useState("");

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${api_key}&units=metric`
      );
      console.log(response);
      setTemperature(response.data.main.temp);
      setIcon(response.data.weather[0].icon);
      setWind(response.data.wind.speed);
    };
    getWeather();
  }, []);

  return (
    <>
      <h1>Weather in {props.capital}</h1>
      <p>temperature {temperature}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      />
      <p>wind {wind} m/s</p>
    </>
  );
};

export default WeatherInfo;
