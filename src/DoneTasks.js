import React from "react";

function DoneTasks({ doneTasks, setDoneTasks }) {
  return (
    <div className="App">
      <h2>Your done tasks</h2>
      <div>
        {doneTasks.length > 0 && (
          <div>
            {doneTasks?.map((doneTask, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: doneTask.colorType.rgb,
                  color:
                    doneTask.colorType.name === "black" ? "white" : "black",
                  border: "solid black",
                }}
              >
                
                {doneTask.title ? <p>title: {doneTask.title}</p> : ""}
                <p>{doneTask.colorType.name}</p>
                <p>{doneTask.moveType.name}</p>
                <p>{doneTask.terrainType.name}</p>
                <p>{doneTask.holdType.name}</p>
                <p>{doneTask.feelingType.name}</p>
                <p>{doneTask.startType.name}</p>
                <p>{doneTask.topicType.name}</p>
                <p>{doneTask.styleType.name}</p>
                {doneTask.note ? <p>note: {doneTask.note}</p> : ""}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DoneTasks;
