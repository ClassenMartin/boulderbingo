import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllVariables from "./AllVariables";
import Main from "./Main";
import Contact from "./Contact";
import DoneTasks from "./DoneTasks";
import SavedTasks from "./SavedTasks";

function App() {
  const [savedTasks, setSavedTasks] = useState(() => {
    const storedTasksStorage = localStorage.getItem('savedTasks');
    return storedTasksStorage? JSON.parse(storedTasksStorage) : [];
  });
  const [doneTasks, setDoneTasks] = useState(() => {
    const doneTasksStorage = localStorage.getItem('doneTasks');
    return doneTasksStorage ? JSON.parse(doneTasksStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
  }, [savedTasks]);

  
  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
  }, [doneTasks]);
  
  return (
    <div className="p-10 flex justify-center flex-col ">
      <div className=" my-4 flex justify-center text-4xl ">
        <h1>BOULDERBINGO</h1>
      </div>
      <nav className="my-4 flex justify-between gap-2">
        <Link to="/main" className="grow btnnav btn-blue btn-blue:hover">
          Main
        </Link>
        <Link to="/savedtasks" className="btnnav btn-blue btn-blue:hover">
          Saved Tasks
        </Link>
        <Link to="/donetasks" className="btnnav btn-blue btn-blue:hover">
          Done Tasks
        </Link>
        <Link to="/variables" className="btnnav btn-blue btn-blue:hover">
          Variables
        </Link>
        <Link to="/contact" className="btnnav btn-blue btn-blue:hover">
          Contact
        </Link>
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
            <SavedTasks
              savedTasks={savedTasks}
              setSavedTasks={setSavedTasks}
              doneTasks={doneTasks}
              setDoneTasks={setDoneTasks}
            />
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
    </div>
  );
}

export default App;
