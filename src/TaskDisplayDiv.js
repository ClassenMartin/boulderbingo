import React, { useState } from "react";
import InfoModal from "./InfoModal";

function TaskDisplayDiv({ task }) {
  const [infoModal, setInfoModal] = useState(false);
  const [infoContent, setInfoContent] = useState(null);

  const taskItems = Object.values(task);

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
          style={{ flexBasis: "calc(25% - 0.5rem)" }}
        >
          <b className="text-2xl">{item?.type}</b>
          {item?.ricScale ? (
            <b>
              {item?.ricScale.risk}/{item?.ricScale.intensity}/
              {item?.ricScale.complexity}
            </b>
          ) : (
            <b>{item?.name}</b>
          )}
          {/* <b>{item?.name}</b> */}
          <button
            className="btn btn-blue btn-blue:hover"
            onClick={() => moreInfo(item?.description)}
          >
            more info
          </button>
          {item?.ricScale ? (
            <div className="w-full aspect-square flex flex-col justify-center border-black border-2 rounded">
              <p>
                Risk: <b>{item?.ricScale?.risk}</b>
              </p>
              <p>
                Intensity: <b>{item?.ricScale?.intensity}</b>
              </p>
              <p>
                Complexity: <b>{item?.ricScale?.complexity}</b>
              </p>
            </div>
          ) : (
            <div className="w-full aspect-square ">
              {item?.image?.length > 0 ? (
                <img
                  src={item?.image}
                  className="w-full border-black border-2 rounded aspect-square"
                  alt=""
                />
              ) : (
                <div
                  className={`w-full aspect-square flex justify-center items-center border-black border-2 rounded ${
                    item?.rgb ? "bg-red-900" : ""
                  }`}
                  style={
                    item?.rgb
                      ? {
                          backgroundColor: task.colorType.rgb,
                          color:
                            task?.colorType?.name === "black"
                              ? "white"
                              : "black",
                          border: "solid black",
                        }
                      : {}
                  }
                >
                  {!item?.rgb && <p>no image...sorry</p>}
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {infoModal && <InfoModal info={infoContent} closeModal={closeModal} />}
    </div>
  );
}

export default TaskDisplayDiv;
