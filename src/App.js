import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllVariables from "./AllVariables";
import Main from "./Main";
import Contact from "./Contact";
import DoneTasks from "./DoneTasks";
import SavedTasks from "./SavedTasks";

function App() {
  const [savedTasks, setSavedTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  return (
    <>
     <div className="header">
        <h1>boulderbingo</h1>
      </div>
      <nav>
        <Link to="/main">Main</Link>
        <Link to="/savedtasks">Saved Tasks</Link>
        <Link to="/donetasks">Done Tasks</Link>
        <Link to="/variables">Variables</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route
          path="/main"
          element={
            <Main savedTasks={savedTasks} setSavedTasks={setSavedTasks} />
          }
        />
        <Route
          path="/savedtasks"
          element={
            <SavedTasks savedTasks={savedTasks} setSavedTasks={setSavedTasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks}/>
          }
        />
        <Route
          path="/donetasks"
          element={
            <DoneTasks doneTasks={doneTasks} setDoneTasks={setDoneTasks} />
          }
        />
        <Route path="/variables" element={<AllVariables />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
