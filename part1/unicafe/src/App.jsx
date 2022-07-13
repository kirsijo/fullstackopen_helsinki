import { useState } from "react";
import Statistics from "./Statistics.jsx";
import Button from "./Button.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClickHandler = () => {
    setGood(good + 1);
    console.log(good);
  };

  const neutralClickHandler = () => {
    setNeutral(neutral + 1);
  };

  const badClickHandler = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={goodClickHandler} name="good" />
      <Button handleClick={neutralClickHandler} name="neutral" />
      <Button handleClick={badClickHandler} name="bad" />
      <Statistics />
    </>
  );
};

export default App;
