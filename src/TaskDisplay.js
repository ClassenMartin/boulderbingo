import React, { useState } from "react";

function TaskDisplay({ task }) {
  return (
    <div
      className="mb-2 rounded p-2"
      style={{
        backgroundColor: task.colorType.rgb,
        color: task.colorType.name === "black" ? "white" : "black",
        border: "solid black",
      }}
    >
      {task?.title && <b className="text-lg">{task.title}</b>}
      <p>
        COLOR: <b>{task.colorType.name}</b>
      </p>
      <p>
        MOVES: <b>{task.moveType.name}</b>
      </p>
      <p>
        TERRAIN:<b>{task.terrainType.name}</b>
      </p>
      <p>
        HOLD:<b>{task.holdType.name}</b>
      </p>
      <p>
        TOPIC:<b>{task.topicType.name}</b>
      </p>
      <p>
        START:<b>{task.startType.name}</b>
      </p>
      <p>
        FEELING:<b>{task.feelingType.name}</b>
      </p>
      <p>
        STYLE:<b>{task.styleType.name}</b>
      </p>
      <p>
        AMOUNT: <b>{task.amountType.name}</b>
      </p>
      {task.note && (
        <p>
          Note:
          <b> {task.note}</b>
        </p>
      )}
    </div>
  );
}

export default TaskDisplay;
