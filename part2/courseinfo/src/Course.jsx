import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
  const total = props.course.parts.reduce((a, b) => {
    return a + b.exercises;
  }, 0);
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={total} />
    </>
  );
};

export default Course;
