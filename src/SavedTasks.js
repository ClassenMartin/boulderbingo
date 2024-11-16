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

// import React, { useEffect, useState } from "react";

// import NoteModal from "./NoteModal";
// import TitleModal from "./TitleModal";

// function SavedTasks({ savedTasks, setSavedTasks, doneTasks, setDoneTasks }) {
//   const [note, setNote] = useState({});
//   const [title, setTitle] = useState({});
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
//   const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);

//    const deleteSavedTask = (toDelete) => {
//      const updatedSavedTasks = [...savedTasks];
//      updatedSavedTasks.splice(toDelete, 1);
//      setSavedTasks(updatedSavedTasks);
//   };

//   const clearSavedTasks = () => {
//     setSavedTasks([]);
//   };

//   const markAsDone = (index) => {
//     const taskToMarkAsDone = savedTasks[index];
//     setDoneTasks([...doneTasks, taskToMarkAsDone]);
//     deleteSavedTask(index);
//   };

//   const openNoteModal = (index) => {
//     setCurrentIndex(index);
//     setIsNoteModalOpen(true);

//   };

//   const openTitleModal = (index) => {
//     setCurrentIndex(index);
//     setIsTitleModalOpen(true);

//   };

//   const updateNote = () => {
//     const updatedSavedTasks = [...savedTasks];
//     updatedSavedTasks[currentIndex] = {...updatedSavedTasks[currentIndex], note: note[currentIndex] || "", // update note of the specific task
//     };
//     setSavedTasks(updatedSavedTasks); // trigger re-render with updated task
//     setIsNoteModalOpen(false);
//   };

//   const updateTitle = () => {
//     const updatedSavedTasks = [...savedTasks];
//     console.log(updatedSavedTasks)
//     updatedSavedTasks[currentIndex] = {
//       ...updatedSavedTasks[currentIndex],
//       title: title[currentIndex] || "", // update title of the specific task
//     };
//     console.log(updatedSavedTasks)
//     setSavedTasks(updatedSavedTasks); // trigger re-render with updated task
//     setIsTitleModalOpen(false);
//   };

//   useEffect(()=>{

//   },[updateTitle]);

//   return (
//     <div className="h-screen relative">
//       <h2 className="header my-4">Your saved tasks</h2>
//       <div>
//         <div>
//           <button
//             onClick={clearSavedTasks}
//             className="btnnav btn-blue btn-blue:hover w-full mb-2"
//           >
//             delete all saved tasks
//           </button>
//         </div>

//         {savedTasks.map((savedTask, index) => (
//           <div
//             className="rounded mb-2"
//             key={index}
//             style={{
//               backgroundColor: savedTask.colorType.rgb,
//               color: savedTask.colorType.name === "black" ? "white" : "black",
//               border: "solid black",
//             }}
//           >
//             <div className="flex gap-2">
//               <button
//                 onClick={() => openNoteModal(index)}
//                 className="btnnav btn-blue"
//               >
//                 ADD NOTE
//               </button>

//               <button
//                 onClick={() => openTitleModal(index)}
//                 className="btnnav btn-blue"
//               >
//                 ADD TITLE
//               </button>
//               <button
//                 onClick={() => markAsDone(index)}
//                 className="btnnav btn-blue"
//               >
//                 MARK AS DONE
//               </button>
//             </div>
//             {savedTask.title && <p>Title: {savedTask.title}</p>}
//             <p>{savedTask.colorType.name}</p>
//             <p>{savedTask.moveType.name}</p>
//             <p>{savedTask.terrainType.name}</p>
//             <p>{savedTask.holdType.name}</p>
//             <p>{savedTask.feelingType.name}</p>
//             <p>{savedTask.startType.name}</p>
//             <p>{savedTask.topicType.name}</p>
//             <p>{savedTask.styleType.name}</p>
//             {savedTask.note && <p>Note: {savedTask.note}</p>}
//             <button
//               onClick={() => deleteSavedTask(index)}
//               className="btnnav btn-blue"
//             >
//               DELETE THIS TASK
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Note Modal */}
//       {isNoteModalOpen && (
//         <NoteModal
//           note={note[currentIndex] || ""}
//           onClose={() => setIsNoteModalOpen(false)}
//           onSave={(value) => {
//             setNote({ ...note, [currentIndex]: value });
//             updateNote();
//           }}
//         />
//       )}

//       {/* Title Modal */}
//       {isTitleModalOpen && (
//         <TitleModal
//           title={title[currentIndex] || ""}
//           onClose={() => setIsTitleModalOpen(false)}
//           onSave={(titleValue) => {
//             setTitle({ ...title, [currentIndex]: titleValue });
//             updateTitle();
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default SavedTasks;

import React, { useEffect, useState } from "react";

import NoteModal from "./NoteModal";
import TitleModal from "./TitleModal";
import TaskDisplay from "./TaskDisplay";
import WarningModal from "./WarningModal";
import UploadPictureModal from "./UploadPictureModal";

function SavedTasks({ savedTasks, setSavedTasks, doneTasks, setDoneTasks }) {
  const [note, setNote] = useState({});
  const [title, setTitle] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

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
    if ("title" in taskToMarkAsDone) {
      setDoneTasks([...doneTasks, taskToMarkAsDone]);
      deleteSavedTask(index);
setTitle({});


    } else {
      setWarningModal(true);
    }
  };

  const closeWarningModal = () => {
    setWarningModal(false);
  };

  const openNoteModal = (index) => {
    setCurrentIndex(index);
    setIsNoteModalOpen(true);
  };

  const openTitleModal = (index) => {
    setCurrentIndex(index);
    setIsTitleModalOpen(true);
  };

  const updateNote = (newNote) => {
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[currentIndex] = {
      ...updatedSavedTasks[currentIndex],
      note: newNote || "",
    };
    setSavedTasks(updatedSavedTasks);
    setIsNoteModalOpen(false);
  };

  useEffect(() => {}, []);

  const updateTitle = (newTitle) => {
    const saved = new Date();
    const updatedSavedTasks = [...savedTasks];
    updatedSavedTasks[currentIndex] = {
      ...updatedSavedTasks[currentIndex],
      title: newTitle || "",
      date: saved
    };
    setSavedTasks(updatedSavedTasks);
    setIsTitleModalOpen(false);
  };

  const uploadPicture = (newPicture) => {
    const updatedSaveTasks = [...savedTasks];
    updatedSaveTasks[currentIndex] = {
      ...updatedSaveTasks[currentIndex],
      picture: newPicture
    };
    setSavedTasks(updatedSaveTasks);
    console.log(updatedSaveTasks)
  }

  const openPictureModal = () => {
    setIsPictureModalOpen(true);
  }
  const closePictureModal = () => {
    setIsPictureModalOpen(false);
  }

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
            className={` rounded mb-2 mt-2 p-2 border-black border-2 ${
              index % 2 === 0 ? "bg-gray-200" : ""
            }`}
            key={index}
          >
            <div className="flex gap-2 mb-4 mt-4">
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
              <button onClick={()=> openPictureModal(index)} className="btnnav btn-blue">UPLOAD PICTURE</button>
              <button
                onClick={() => deleteSavedTask(index)}
                className="btnnav btn-blue"
              >
                DELETE THIS TASK
              </button>
              <button
                onClick={() => markAsDone(index)}
                className="btnnav btn-blue"
              >
                MARK AS DONE
              </button>
            </div>
            <TaskDisplay key={index} task={savedTask} />
          </div>
        ))}
      </div>

      {/* Note Modal */}
      {isNoteModalOpen && (
        <NoteModal
          note={note[currentIndex] || ""}
          onClose={() => setIsNoteModalOpen(false)}
          onSave={(noteValue) => {
            setNote({ ...note, [currentIndex]: noteValue });
            updateNote(noteValue);
          }}
        />
      )}

      {/* Title Modal */}
      {isTitleModalOpen && (
        <TitleModal
          title={title[currentIndex] || ""}
          onClose={() => setIsTitleModalOpen(false)}
          onSave={(titleValue) => {
            setTitle({ ...title, [currentIndex]: titleValue });
            updateTitle(titleValue); // Pass the updated title directly
          }}
        />
      )}

      {isPictureModalOpen && (
        <UploadPictureModal uploadPicture={uploadPicture} closePictureModal={closePictureModal} />
      )}

      {warningModal && <WarningModal closeWarningModal={closeWarningModal} />}
    </div>
  );
}

export default SavedTasks;
