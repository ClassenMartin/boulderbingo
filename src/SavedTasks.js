import React, { useState } from "react";

function SavedTasks({ savedTasks, setSavedTasks, doneTasks, setDoneTasks }) {
  // Use an object instead of an array for descriptions
  const [note, setNote] = useState({});
  const [title, setTitle] = useState({});

  const deleteSavedTask = (toDelete) => {
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks.splice(toDelete, 1);
    setSavedTasks(updatedSavedTasks);
  };

  const clearSavedTasks = () => {
    setSavedTasks([]);
  };

  const markAsDone = (index) => {
    const taskToMarkAsDone = savedTasks[index];
    setDoneTasks([...doneTasks, taskToMarkAsDone]);
    deleteSavedTask(index);
  };

  const addNote = (index) => {
    const taskWithNote = savedTasks[index];
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[index] = {
      ...taskWithNote,
      note: note[index] || "",
    };
    setSavedTasks(updatedSavedTasks);
  };

  const giveTitle = (index) => {
    const taskWithTitle = savedTasks[index];
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[index] = {
      ...taskWithTitle,
      title: title[index] || "",
    };
    setSavedTasks(updatedSavedTasks);
  };

  const handleNoteChange = (index, value) => {
    setNote({
      ...note,
      [index]: value,
    });
  };

  const handleTitleChange = (index, value) => {
    setTitle({
      ...title,
      [index]: value,
    });
  };

  return (
    <div className="App">
      <h2>Your saved tasks</h2>
      <div>
        {savedTasks.length > 0 && (
          <div>
            <div>
              <button onClick={clearSavedTasks}>CLEAR SAVED TASKS</button>
            </div>
            {savedTasks.map((savedTask, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: savedTask.colorType.rgb,
                  color:
                    savedTask.colorType.name === "black" ? "white" : "black",
                  border: "solid black",
                }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    giveTitle(index);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Give me a name?"
                    name="title"
                    value={title[index] || ""}
                    onChange={(e) => handleTitleChange(index, e.target.value)}
                  />
                  <button type="submit">NAME THIS TASK</button>
                </form>
                <button onClick={() => deleteSavedTask(index)}>
                  DELETE THIS TASK
                </button>
                <button onClick={() => markAsDone(index)}>MARK AS DONE</button>
                {savedTask.title ? <p>title: {savedTask.title}</p> : ""}
                <p>{savedTask.colorType.name}</p>
                <p>{savedTask.moveType.name}</p>
                <p>{savedTask.terrainType.name}</p>
                <p>{savedTask.holdType.name}</p>
                <p>{savedTask.feelingType.name}</p>
                <p>{savedTask.startType.name}</p>
                <p>{savedTask.topicType.name}</p>
                <p>{savedTask.styleType.name}</p>
                {savedTask.note ? <p>note: {savedTask.note}</p> : ""}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addNote(index);
                  }}
                >
                  <input
                    type="text"
                    placeholder="What ya thinking?"
                    name="note"
                    value={note[index] || ""}
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                  />
                  <button type="submit">ADD NOTE TO TASK</button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedTasks;
