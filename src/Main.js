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
} from "./variablesFile";

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
    setTask({
      colorType: color,
      moveType: move,
      terrainType: terrain,
      holdType: hold,
      feelingType: feeling,
      startType: start,
      topicType: topic,
      styleType: style,
    });
  };

  const clearTask = () => {
    setTask(null);
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

  const saveTask = () => {
    setSavedTasks([...savedTasks, task]);
  };

  return (
    <div className="App">
      <h2>Create tasks here</h2>
      <div>
        <button onClick={createTask}>
          {preselect.colorType !== null ||
          preselect.terrainType !== null ||
          preselect.moveType !== null ||
          preselect.holdType !== null
            ? "RANDOM TASK WITH PRESELECTED OPTIONS"
            : "RANDOM TASK"}
        </button>

        <button onClick={selectorToggle}>
          {!selector ? "OPEN PRESELECTOR" : "CLOSE PRESELECTOR"}
        </button>
      </div>
      <div>
        {task && (
          <div>
            <h2>YOUR TASK</h2>
            <div
              style={{
                backgroundColor: task.colorType.rgb,
                color: task.colorType.name === "black" ? "white" : "black",
                border: "solid black",
              }}
            >
              <p>
                STYLE: <b>{task.colorType.name}</b>
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
              <div>
                <button onClick={saveTask} disabled={!task}>
                  SAVE TASK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {selector && (
        <div>
          <h2>SELECTOR</h2>
          <div className="selector">
            <div>
              <h3>PRESELECT COLOR</h3>
              <button
                onClick={clearColorSelect}
                disabled={!preselect.colorType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.colorType?.name}</h4>
              {COLORS.map((color, index) => (
                <div key={index}>
                  <h4>{color.name}</h4>
                  <button onClick={() => setColorPreselect(color)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h3>PRESELECT MOVE</h3>
              <button onClick={clearMoveSelect} disabled={!preselect.moveType}>
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.moveType?.name}</h4>
              {MOVES.map((move, index) => (
                <div key={index}>
                  <h4>{move.name}</h4>
                  <button onClick={() => setMovePreselect(move)}>Choose</button>
                </div>
              ))}
            </div>
            <div>
              <h3>PRESELECT TERRAIN</h3>
              <button
                onClick={clearTerrainSelect}
                disabled={!preselect.terrainType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.terrainType?.name}</h4>
              {TERRAINS.map((terrain, index) => (
                <div key={index}>
                  <h4>{terrain.name}</h4>
                  <button onClick={() => setTerrainPreselect(terrain)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>
            <div>
              <h3>PRESELECT HOLD</h3>
              <button onClick={clearHoldSelect} disabled={!preselect.holdType}>
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.holdType?.name}</h4>
              {HOLDS.map((hold, index) => (
                <div key={index}>
                  <h4>{hold.name}</h4>
                  <button onClick={() => setHoldPreselect(hold)}>Choose</button>
                </div>
              ))}
            </div>

            <div>
              <h3>PRESELECT FEELING</h3>
              <button
                onClick={clearFeelingSelect}
                disabled={!preselect.feelingType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.feelingType?.name}</h4>
              {FEELINGS.map((feeling, index) => (
                <div key={index}>
                  <h4>{feeling.name}</h4>
                  <button onClick={() => setFeelingPreselect(feeling)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h3>PRESELECT START</h3>
              <button
                onClick={clearStartSelect}
                disabled={!preselect.startType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.startType?.name}</h4>
              {STARTS.map((start, index) => (
                <div key={index}>
                  <h4>{start.name}</h4>
                  <button onClick={() => setStartPreselect(start)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h3>PRESELECT TOPIC</h3>
              <button
                onClick={clearTopicSelect}
                disabled={!preselect.topicType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.topicType?.name}</h4>
              {TOPICS.map((topic, index) => (
                <div key={index}>
                  <h4>{topic.name}</h4>
                  <button onClick={() => setTopicPreselect(topic)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h3>PRESELECT STYLE</h3>
              <button
                onClick={clearStyleSelect}
                disabled={!preselect.styleType}
              >
                CLEAR THIS OPTION
              </button>
              <h4>you selected {preselect?.styleType?.name}</h4>
              {STYLES.map((style, index) => (
                <div key={index}>
                  <h4>{style.name}</h4>
                  <button onClick={() => setStylePreselect(style)}>
                    Choose
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
