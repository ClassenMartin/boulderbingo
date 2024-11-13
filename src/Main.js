import React from "react";
import { useState } from "react";
import {
  COLORS,
  MOVES,
  TERRAINS,
  HOLDS,
  FEELINGS,
  STARTS,
  TOPICS,
  STYLES,
  AMOUNTOFMOVES,
} from "./variablesFile";
import TaskDisplay from "./TaskDisplay";
import TaskDisplayDiv from "./TaskDisplayDiv";

function Main({ savedTasks, setSavedTasks }) {
  const [task, setTask] = useState(null);
  // const [savedTasks, setSavedTasks] = useState([]);
  const [selector, setSelector] = useState(false);
  const [preselect, setPreselect] = useState({
    colorType: null,
    moveType: null,
    terrainType: null,
    holdType: null,
    feelingType: null,
    startType: null,
    topicType: null,
    styleType: null,
  });

  const generateRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return random;
  };

  const createTask = () => {
    const color = preselect.colorType || COLORS[generateRandom(COLORS)];
    const move = preselect.moveType || MOVES[generateRandom(MOVES)];
    const terrain = preselect.terrainType || TERRAINS[generateRandom(TERRAINS)];
    const hold = preselect.holdType || HOLDS[generateRandom(HOLDS)];
    const feeling = preselect.feelingType || FEELINGS[generateRandom(FEELINGS)];
    const start = preselect.startType || STARTS[generateRandom(STARTS)];
    const topic = preselect.topicType || TOPICS[generateRandom(TOPICS)];
    const style = preselect.styleType || STYLES[generateRandom(STYLES)];
    const amount =
      preselect.amountType || AMOUNTOFMOVES[generateRandom(AMOUNTOFMOVES)];
    setTask({
      colorType: color,
      moveType: move,
      terrainType: terrain,
      holdType: hold,
      feelingType: feeling,
      startType: start,
      topicType: topic,
      styleType: style,
      amountType: amount,
    });
  };

  const selectorToggle = () => {
    setTask(null);
    setSelector((prev) => !prev);
    setPreselect({
      colorType: null,
      moveType: null,
      terrainType: null,
      holdType: null,
      feelingType: null,
      startType: null,
      topicType: null,
      styleType: null,
      amountType: null,
    });
  };

  const setColorPreselect = (color) => {
    setPreselect((prev) => ({ ...prev, colorType: color }));
  };

  const setMovePreselect = (move) => {
    setPreselect((prev) => ({ ...prev, moveType: move }));
  };

  const setTerrainPreselect = (terrain) => {
    setPreselect((prev) => ({ ...prev, terrainType: terrain }));
  };

  const setHoldPreselect = (hold) => {
    setPreselect((prev) => ({ ...prev, holdType: hold }));
  };

  const setFeelingPreselect = (feeling) => {
    setPreselect((prev) => ({ ...prev, feelingType: feeling }));
  };

  const setTopicPreselect = (topic) => {
    setPreselect((prev) => ({ ...prev, topicType: topic }));
  };

  const setStartPreselect = (start) => {
    setPreselect((prev) => ({ ...prev, startType: start }));
  };

  const setStylePreselect = (style) => {
    setPreselect((prev) => ({ ...prev, styleType: style }));
  };

  const setAmountPreselect = (amount) => {
    setPreselect((prev) => ({ ...prev, amountType: amount }));
  };

  const clearTerrainSelect = () => {
    setPreselect((prev) => ({ ...prev, terrainType: null }));
  };

  const clearMoveSelect = () => {
    setPreselect((prev) => ({ ...prev, moveType: null }));
  };

  const clearHoldSelect = () => {
    setPreselect((prev) => ({ ...prev, holdType: null }));
  };

  const clearColorSelect = () => {
    setPreselect((prev) => ({ ...prev, colorType: null }));
  };

  const clearFeelingSelect = () => {
    setPreselect((prev) => ({ ...prev, feelingType: null }));
  };

  const clearTopicSelect = () => {
    setPreselect((prev) => ({ ...prev, topicType: null }));
  };

  const clearStartSelect = () => {
    setPreselect((prev) => ({ ...prev, startType: null }));
  };

  const clearStyleSelect = () => {
    setPreselect((prev) => ({ ...prev, styleType: null }));
  };

  const clearAmountSelect = () => {
    setPreselect((prev) => ({ ...prev, amountType: null }));
  };

  const saveTask = () => {
    setSavedTasks([...savedTasks, task]);
    setTask(null);
  };

  return (
    <div className="h-screen">
      <h2 className="header my-4">Create tasks here</h2>
      <div className="my-4 flex justify-around  gap-2">
        <button onClick={createTask} className="btnnav btn-blue btn-blue:hover">
          {preselect.colorType !== null ||
          preselect.terrainType !== null ||
          preselect.moveType !== null ||
          preselect.holdType !== null
            ? "RANDOM TASK WITH PRESELECTED OPTIONS"
            : "RANDOM TASK"}
        </button>

        <button onClick={selectorToggle} className="btnnav btn-blue ">
          {!selector ? "OPEN PRESELECTOR" : "CLOSE PRESELECTOR"}
        </button>
      </div>
      <div>
        

        {task && (
          <div className="mb-10 flex flex-col rounded">
            <h2 className="w-full text-center  font-black pb-3 pt-3 bg-blue-100 mb-4 rounded">
              YOUR TASK
            </h2>
            {/* <TaskDisplay task={task} /> */}
            <button
              onClick={saveTask}
              disabled={!task}
              className="btnnav btn-blue btn-blue:hover mb-4"
            >
              SAVE TASK
            </button>
            <TaskDisplayDiv task={task} />
          
          </div>
        )}
      </div>

      {selector && (
        <div className="border-black border-2 w-full flex gap-2 p-2">
          <div className="text-center">
            <h3>
              <b>COLOR</b>
            </h3>
            <button
              onClick={clearColorSelect}
              disabled={!preselect.colorType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected</h4> 
              <b>{preselect?.colorType?.name}</b> */}
            <div>
              {COLORS.map((color, index) => (
                <div
                  key={index}
                  className={preselect.colorType === color ? "bg-gray-500" : ""}
                >
                  <h4>{color.name}</h4>
                  <button
                    onClick={() => setColorPreselect(color)}
                    className="btnnav btn-blue w-full"
                  >
                    Choose
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3>
              <b>MOVE</b>
            </h3>
            <button
              onClick={clearMoveSelect}
              disabled={!preselect.moveType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.moveType?.name}</h4> */}
            {MOVES.map((move, index) => (
              <div
                key={index}
                className={preselect.moveType === move ? "bg-gray-500" : ""}
              >
                <h4>{move.name}</h4>
                <button
                  onClick={() => setMovePreselect(move)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>TERRAIN</b>
            </h3>
            <button
              onClick={clearTerrainSelect}
              disabled={!preselect.terrainType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.terrainType?.name}</h4> */}
            {TERRAINS.map((terrain, index) => (
              <div
                key={index}
                className={
                  preselect.terrainType === terrain ? "bg-gray-500" : ""
                }
              >
                <h4>{terrain.name}</h4>
                <button
                  onClick={() => setTerrainPreselect(terrain)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>HOLD</b>
            </h3>
            
            <button
              onClick={clearHoldSelect}
              disabled={!preselect.holdType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.holdType?.name}</h4> */}
            {HOLDS.map((hold, index) => (
              <div
                key={index}
                className={preselect.holdType === hold ? "bg-gray-500" : ""}
              >
                <h4>{hold.name}</h4>
                <button
                  onClick={() => setHoldPreselect(hold)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>FEELING</b>
            </h3>
            <button
              onClick={clearFeelingSelect}
              disabled={!preselect.feelingType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.feelingType?.name} </h4> */}
            {FEELINGS.map((feeling, index) => (
              <div
                key={index}
                className={
                  preselect.feelingType === feeling ? "bg-gray-500" : ""
                }
              >
                <h4>{feeling.name}</h4>
                <button
                  onClick={() => setFeelingPreselect(feeling)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>START</b>
            </h3>
            <button
              onClick={clearStartSelect}
              disabled={!preselect.startType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.startType?.name}</h4> */}
            {STARTS.map((start, index) => (
              <div
                key={index}
                className={preselect.startType === start ? "bg-gray-500" : ""}
              >
                <h4>{start.name}</h4>
                <button
                  onClick={() => setStartPreselect(start)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>TOPIC</b>
            </h3>
            <button
              onClick={clearTopicSelect}
              disabled={!preselect.topicType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.topicType?.name}</h4> */}
            {TOPICS.map((topic, index) => (
              <div
                key={index}
                className={preselect.topicType === topic ? "bg-gray-500" : ""}
              >
                <h4>{topic.name}</h4>
                <button
                  onClick={() => setTopicPreselect(topic)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>STYLE</b>
            </h3>
            <button
              onClick={clearStyleSelect}
              disabled={!preselect.styleType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.styleType?.name}</h4> */}
            {STYLES.map((style, index) => (
              <div
                key={index}
                className={preselect.styleType === style ? "bg-gray-500" : ""}
              >
                <h4>{style.name}</h4>
                <button
                  onClick={() => setStylePreselect(style)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3>
              <b>AMOUNT</b>
            </h3>
            <button
              onClick={clearAmountSelect}
              disabled={!preselect.amountType}
              className="btnnav btn-blue"
            >
              CLEAR THIS OPTION
            </button>
            {/* <h4>you selected {preselect?.styleType?.name}</h4> */}
            {AMOUNTOFMOVES.map((amount, index) => (
              <div
                key={index}
                className={preselect.amountType === amount ? "bg-gray-500" : ""}
              >
                <h4>{amount.name}</h4>
                <button
                  onClick={() => setAmountPreselect(amount)}
                  className="btnnav btn-blue w-full"
                >
                  Choose
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
