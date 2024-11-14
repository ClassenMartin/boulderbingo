import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";

function DoneModal({ modalContent, closeModal }) {
  const [task, setTask] = useState(null);

  console.log("content", modalContent);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center w-full">
      <div className="bg-white p-10 rounded shadow-md w-1/2 w-full flex flex-col gap-2">
        <TaskDisplay task={modalContent} />
        <div className="w-full flex justify-between mb-2">
          <div>picture</div>
          <div>video</div>
        </div>
        <div className="w-full flex gap-4">
          <button className="btnnav btn-red w-1/2" onClick={closeModal}>
            {" "}
            Close Modal
          </button>
          <button className="btnnav btn-blue w-1/2">Share</button>
        </div>
      </div>
    </div>
  );
}

export default DoneModal;
