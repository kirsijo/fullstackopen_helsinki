import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  const total = () => {
    return props.good + props.bad + props.neutral;
  };

  const average = () => {
    return (props.good + props.bad + props.neutral / 3).toFixed(1);
  };

  const positive = () => {
    const percentagePositive =
      (props.good / (props.good + props.bad + props.neutral)) * 100;
    return `${percentagePositive.toFixed(1)}%`;
  };

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" clicks={props.good} />
          <StatisticsLine text="neutral" clicks={props.neutral} />
          <StatisticsLine text="bad" clicks={props.bad} />
          <StatisticsLine text="all" clicks={total()} />
          <StatisticsLine text="average" clicks={average()} />
          <StatisticsLine text="positive" clicks={positive()} />
        </tbody>
      </table>
    </>
  );
};
export default Statistics;
