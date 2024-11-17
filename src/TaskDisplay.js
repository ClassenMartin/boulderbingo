import React from "react";

function TaskDisplay({ task }) {
  return (
    <div
      className="mb-2 rounded p-2 flex border-black b-2 bg-white"
      style={{
        border: "solid black",
      }}
    >
      <div className="border-black border-2 w-1/3 rounded p-2"
      style={{ backgroundColor: task?.colorType?.rgb,
        color: task?.colorType?.name === "black" ? "white" : "black",}}>
        {task?.title && (
          <h3 className="text-center">
            <b>{task.title}</b>
          </h3>
        )}
        {task?.colorType && (
          <p>
            COLOR: <b>{task.colorType.name}</b>
          </p>
        )}

        {task?.ricType && (
          <p>
            RIC:{" "}
            <b>
              {task.ricType.ricScale.risk}/{task.ricType.ricScale.intensity}/
              {task.ricType.ricScale.complexity}
            </b>
          </p>
        )}

        {task?.moveType && (
          <p>
            MOVES: <b>{task.moveType.name}</b>
          </p>
        )}

        {task?.levelType && (
          <p>
            LEVEL: <b>{task.levelType.name}</b>
          </p>
        )}

        {task?.terrainType && (
          <p>
            TERRAIN: <b>{task.terrainType.name}</b>
          </p>
        )}

        {task.holdType && (
          <p>
            HOLD: <b>{task.holdType.name}</b>
          </p>
        )}

        {task.topicType && (
          <p>
            TOPIC: <b>{task.topicType.name}</b>
          </p>
        )}

        {task.startType && (
          <p>
            START: <b>{task.startType.name}</b>
          </p>
        )}

        {task.feelingType && (
          <p>
            FEELING: <b>{task.feelingType.name}</b>
          </p>
        )}

        {task.styleType && (
          <p>
            STYLE: <b>{task.styleType.name}</b>
          </p>
        )}

        {task.amountType && (
          <p>
            AMOUNT: <b>{task.amountType.name}</b>
          </p>
        )}
      </div>
      <div className=" p-2 w-1/3">
        <h3 className="text-center">
          <b> NOTE:</b>
        </h3>
        {task.note && <p>{task.note}</p>}
      </div>

      <div className="p-2 w-1/3 border-black border-2 rounded">
        {task.picture && (
          <div>
            <img src={task.picture} alt="Task" className="w-full h-auto" />
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
}

export default TaskDisplay;
