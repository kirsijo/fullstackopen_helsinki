import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const selectAnecdote = () => {
    const currentAnecdote = getRndInt(0, anecdotes.length - 1);
    setSelected(currentAnecdote);
  };

  const addVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
    console.log(selected, votes);
  };

  let votesArr = Object.values(votes);
  let max = Math.max(...votesArr);
  let whereIsMax = votesArr.indexOf(max);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>This anecdote has {votes[selected]} votes</div>
      <button onClick={addVote}>Vote</button>
      <button onClick={selectAnecdote}>Next anecdote</button>
      <h1>
        Anecdote with the most votes is: <br />
        <i>"{anecdotes[whereIsMax]}"</i>
        <p>This anecdote has {max} votes</p>
      </h1>
    </>
  );
};

export default App;
