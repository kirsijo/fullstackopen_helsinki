import { useState } from "react";
import Statistics from "./Statistics.jsx";
import Button from "./Button.jsx";

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAll] = useState([]);

  const goodClickHandler = () => {
    setAll(allFeedback.concat("good"));
    setGood(good + 1);
  };

  const neutralClickHandler = () => {
    setAll(allFeedback.concat("neutral"));
    setNeutral(neutral + 1);
  };

  const badClickHandler = () => {
    setAll(allFeedback.concat("bad"));
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={goodClickHandler} name="good" />
      <Button handleClick={neutralClickHandler} name="neutral" />
      <Button handleClick={badClickHandler} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={allFeedback} />
    </>
  );
};

export default App;
