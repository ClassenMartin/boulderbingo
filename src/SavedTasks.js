// import React, { useState } from "react";

// function SavedTasks({ savedTasks, setSavedTasks, doneTasks, setDoneTasks }) {

//   const [note, setNote] = useState({});
//   const [title, setTitle] = useState({});

//   const deleteSavedTask = (toDelete) => {
//     const updatedSavedTasks = [...savedTasks];
//     updatedSavedTasks.splice(toDelete, 1);
//     setSavedTasks(updatedSavedTasks);
//   };

//   const clearSavedTasks = () => {
//     setSavedTasks([]);
//   };

//   const markAsDone = (index) => {
//     const taskToMarkAsDone = savedTasks[index];
//     setDoneTasks([...doneTasks, taskToMarkAsDone]);
//     deleteSavedTask(index);
//   };

//   const addNote = (index) => {
//     const taskWithNote = savedTasks[index];
//     const updatedSavedTasks = [...savedTasks];
//     updatedSavedTasks[index] = {
//       ...taskWithNote,
//       note: note[index] || "",
//     };
//     setSavedTasks(updatedSavedTasks);
//   };

//   const giveTitle = (index) => {
//     const taskWithTitle = savedTasks[index];
//     const updatedSavedTasks = [...savedTasks];
//     updatedSavedTasks[index] = {
//       ...taskWithTitle,
//       title: title[index] || "",
//     };
//     setSavedTasks(updatedSavedTasks);
//   };

//   const handleNoteChange = (index, value) => {
//     setNote({
//       ...note,
//       [index]: value,
//     });
//   };

//   const handleTitleChange = (index, value) => {
//     setTitle({
//       ...title,
//       [index]: value,
//     });
//   };

//   return (
//     <div className="h-screen">
//      <h2 className="header my-4">Your saved tasks</h2>
//       <div>
//         {savedTasks.length > 0 && (
//           <div>
//             <div>
//               <button onClick={clearSavedTasks} className="btnnav btn-blue btn-blue:hover w-full mb-2">delete all saved tasks</button>
//             </div>
//             {savedTasks.map((savedTask, index) => (
//               <div className="rounded mb-2"
//                 key={index}
//                 style={{
//                   backgroundColor: savedTask.colorType.rgb,
//                   color:
//                     savedTask.colorType.name === "black" ? "white" : "black",
//                   border: "solid black",
//                 }}
//               >
//                  <div className="flex gap-2">
//                   <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     addNote(index);
//                   }}
//                 >
//                   <input
//                     type="text"
//                     placeholder="What ya thinking?"
//                     name="note"
//                     value={note[index] || ""}
//                     onChange={(e) => handleNoteChange(index, e.target.value)}
//                   />
//                   <button type="submit" className="btnnav btn-blue btn-blue:hover">ADD NOTE TO TASK</button>
//                 </form>
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     giveTitle(index);
//                   }}
//                 >
//                   <input
//                     type="text"
//                     placeholder="Give me a name?"
//                     name="title"
//                     value={title[index] || ""}
//                     onChange={(e) => handleTitleChange(index, e.target.value)}
//                   />
//                   <button type="submit" className="btnnav btn-blue btn-blue:hover">NAME THIS TASK</button>
//                 </form>
//                 <button onClick={() => markAsDone(index)} className="btnnav btn-blue btn-blue:hover">MARK AS DONE</button>

//                 </div>

//                 {savedTask.title ? <p>title: {savedTask.title}</p> : ""}
//                 <p>{savedTask.colorType.name}</p>
//                 <p>{savedTask.moveType.name}</p>
//                 <p>{savedTask.terrainType.name}</p>
//                 <p>{savedTask.holdType.name}</p>
//                 <p>{savedTask.feelingType.name}</p>
//                 <p>{savedTask.startType.name}</p>
//                 <p>{savedTask.topicType.name}</p>
//                 <p>{savedTask.styleType.name}</p>
//                 {savedTask.note ? <p>note: {savedTask.note}</p> : ""}
//                 <button onClick={() => deleteSavedTask(index)} className="btnnav btn-blue btn-blue:hover">
//                   DELETE THIS TASK
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SavedTasks;

import React, { useState } from "react";

import NoteModal from "./NoteModal";
import TitleModal from "./TitleModal";

function SavedTasks({ savedTasks, setSavedTasks, doneTasks, setDoneTasks }) {
  const [note, setNote] = useState({});
  const [title, setTitle] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);
 
 
  const deleteSavedTask = (toDelete) => {
    const updatedSavedTasks = savedTasks.filter((_, index) => index !== toDelete);
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

  const openNoteModal = (index) => {
    setCurrentIndex(index);
    setIsNoteModalOpen(true);
  };

  const openTitleModal = (index) => {
    setCurrentIndex(index);
    setIsTitleModalOpen(true);
  };

  const updateNote = () => {
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[currentIndex] = {
      ...updatedSavedTasks[currentIndex],
      note: note[currentIndex] || "", // update note of the specific task
    };
    setSavedTasks(updatedSavedTasks); // trigger re-render with updated task
    setIsNoteModalOpen(false);
    
  };

  const updateTitle = () => {
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[currentIndex] = {
      ...updatedSavedTasks[currentIndex],
      title: title[currentIndex] || "", // update title of the specific task
    };
    setSavedTasks(updatedSavedTasks); // trigger re-render with updated task
    setIsTitleModalOpen(false);
  };

  return (
    <div className="h-screen relative">
      <h2 className="header my-4">Your saved tasks</h2>
      <div>
        <div>
          <button
            onClick={clearSavedTasks}
            className="btnnav btn-blue btn-blue:hover w-full mb-2"
          >
            delete all saved tasks
          </button>
        </div>
















        {savedTasks.map((savedTask, index) => (




          <div
            className="rounded mb-2"
            key={index}
            style={{
              backgroundColor: savedTask.colorType.rgb,
              color: savedTask.colorType.name === "black" ? "white" : "black",
              border: "solid black",
            }}
          >
            <div className="flex gap-2">



              
              <button
                onClick={() => openNoteModal(index)}
                className="btnnav btn-blue"
              >
                ADD NOTE
              </button>






              <button
                onClick={() => openTitleModal(index)}
                className="btnnav btn-blue"
              >
                ADD TITLE
              </button>
              <button
                onClick={() => markAsDone(index)}
                className="btnnav btn-blue"
              >
                MARK AS DONE
              </button>
            </div>
            {savedTask.title && <p>Title: {savedTask.title}</p>}
            <p>{savedTask.colorType.name}</p>
            <p>{savedTask.moveType.name}</p>
            <p>{savedTask.terrainType.name}</p>
            <p>{savedTask.holdType.name}</p>
            <p>{savedTask.feelingType.name}</p>
            <p>{savedTask.startType.name}</p>
            <p>{savedTask.topicType.name}</p>
            <p>{savedTask.styleType.name}</p>
            {savedTask.note && <p>Note: {savedTask.note}</p>}
            <button
              onClick={() => deleteSavedTask(index)}
              className="btnnav btn-blue"
            >
              DELETE THIS TASK
            </button>
          </div>
        )
        
        
        )
        
        
        }

        
      </div>






















      {/* Note Modal */}
      {isNoteModalOpen && (
        <NoteModal
          note={note[currentIndex] || ""}
          onClose={() => setIsNoteModalOpen(false)}
          onSave={(value) => {
            setNote({ ...note, [currentIndex]: value });
            updateNote();
          }}
        />
      )}

      {/* Title Modal */}
      {isTitleModalOpen && (
        <TitleModal
          title={title[currentIndex] || ""}
          onClose={() => setIsTitleModalOpen(false)}
          onSave={(value) => {
            setTitle({ ...title, [currentIndex]: value });
            updateTitle();
          }}
        />
      )}
    </div>
  );
}

export default SavedTasks;

