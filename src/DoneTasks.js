import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import DoneModal from "./DoneModal";

function DoneTasks({ doneTasks }) {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const displayDoneTask = (task) => {
    setModalContent(task);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setModalContent(null);
  }
  return (
    <div className="h-screen">
      <h2 className="header my-4">Your done tasks</h2>

      {doneTasks.length > 0 && (
        <div className="w-full flex border-black border-2 gap-2 p-2">
          {doneTasks?.map((doneTask, index) => (
            <div
              key={index}
              className="border-black border-2"
              onClick={() => displayDoneTask(doneTask)}
            >
              <b>{doneTask.title}</b>
              <p>{doneTask.date.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
      {isModal && 
      <DoneModal  modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default DoneTasks;
