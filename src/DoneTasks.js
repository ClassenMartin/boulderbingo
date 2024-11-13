import React, {useState} from "react";
import TaskDisplay from "./TaskDisplay";

function DoneTasks({ doneTasks }) {

  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="h-screen">
      <h2 className="header my-4">Your done tasks</h2>
      
        {doneTasks.length > 0 && (
          <div className="w-full flex border-black border-2 gap-2 p-2">
            {doneTasks?.map((doneTask, index) => (
          <div className="border-black border-2">{doneTask.title}</div>
              // <TaskDisplay key={index} task={doneTask}/>
            ))}
          </div>
        )}
      
    </div>
  );
}

export default DoneTasks;
