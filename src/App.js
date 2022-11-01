import { Routes, Route, NavLink } from "react-router-dom";
import useStudents from "./services/useStudents";
import Instructions from "./Instructions";
import Students from "./Components/Students";
import "./styles.scss";
import StudentDetailPage from "./Components/StudentDetailPage";

const App = () => {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];

  const navColor = {
    color: "white"
  };

  return (
    <div className="App">
      <nav>
        <NavLink
          className="link"
          to="/students"
          style={({ isActive }) => (isActive ? navColor : undefined)}
        >
          Students
        </NavLink>
        <NavLink className="link" to="#">
          Student Results
        </NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="/" element={<h1>homepage</h1>} />
            <Route
              path="students"
              element={<Students studentsList={students} />}
            />
            <Route
              path="students/:id"
              element={<StudentDetailPage studentsList={students} />}
            />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
