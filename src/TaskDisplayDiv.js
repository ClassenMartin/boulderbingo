import React, { useState } from "react";
import InfoModal from "./InfoModal";

function TaskDisplayDiv({ task }) {
  const [infoModal, setInfoModal] = useState(false);
  const [infoContent, setInfoContent] = useState(null);

  const taskItems = Object.values(task);
  // console.log("Task items to map over:", taskItems);

  const moreInfo = (info) => {
    setInfoContent(info);
    setInfoModal(true);
  };

  const closeModal = () => {
    setInfoModal(false);
    setInfoContent(null);
  };

  return (
    <div className="mb-2 rounded flex flex-wrap gap-x-2 gap-y-2">
      {taskItems.map((item, index) => (
        <div
          key={index}
          className=" flex flex-col content-center text-center border-black border-2  p-2 gap-y-2"
          style={{ flexBasis: 'calc(25% - 0.5rem)' }}
        >
          <b className="text-2xl">{item?.type}</b>
          <b>{item?.name}</b>

          <button className="btn btn-blue btn-blue:hover" onClick={() => moreInfo(item.description)}>
            more info
          </button>

          <div className="w-full aspect-square ">
            {item?.image?.length > 0 ? (
              <img
                src={item?.image}
                className="w-full border-black border-2 rounded aspect-square"
              />
            ) : (
              <div
                className={`w-full aspect-square flex justify-center items-center ${
                  item?.rgb ? "bg-red-900" : ""
                }`}
                style={
                  item?.rgb
                    ? {
                        backgroundColor: task.colorType.rgb,
                        color:
                          task.colorType.name === "black" ? "white" : "black",
                        border: "solid black",
                      }
                    : {}
                }
              >
                {!item?.rgb && <p>something went wrong</p>}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* <div className=" flex flex-col content-center text-center border-black border-2 w-1/4 p-2">
        <p>START:</p>
        <b>{task.startType.name}</b>

        <button
          className="btn"
          onClick={() => moreInfo(task?.startType?.description)}
        >
          more info
        </button>

        <div className="w-full aspect-square ">
          {task?.startType?.image?.length > 0 ? (
            <img
              src={task.startType.image}
              className="w-full border-black border-2 rounded aspect-square"
            />
          ) : (
            <div className="bg-red-900 w-full aspect-square flex justify-center items-center">
            <p>something went wrong</p>
            </div>
          )}
        </div>
      </div> */}
      {infoModal && <InfoModal info={infoContent} closeModal={closeModal} />}
    </div>
  );
}

export default TaskDisplayDiv;
