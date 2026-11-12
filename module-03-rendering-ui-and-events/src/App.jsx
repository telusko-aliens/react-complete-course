import "./App.css";
import CourseCard from "./CourseCard";
import { courses } from "./courses";

function App() {
  return (
    <>
      {
        courses.map((course) => (
          <CourseCard title={course.title} price={course.price} instructor={course.instructor} key={course.id} />
        ))
      }
    </>
  );
}

export default App;