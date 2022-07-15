import React from "react";

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.clicks}</td>
      </tr>
    </>
  );
};

export default StatisticsLine;
