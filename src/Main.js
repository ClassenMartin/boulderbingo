import React from "react";
import { useState, useEffect } from "react";
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

import TaskDisplayDiv from "./TaskDisplayDiv";

function Main({ savedTasks, setSavedTasks }) {
  const [task, setTask] = useState(null);
  const [selector, setSelector] = useState(false);
  const [ric, setRic] = useState(null);
  const [preselect, setPreselect] = useState({
    holdType: null,
    colorType: null,
    moveType: null,
    terrainType: null,
    feelingType: null,
    startType: null,
    topicType: null,
    styleType: null,
    amountType: null,

    excludeHold: false,
    excludeColor: false,
    excludeMove: false,
    excludeTerrain: false,
    excludeFeeling: false,
    excludeStart: false,
    excludeTopic: false,
    excludeStyle: false,
    excludeAmount: false,
    excludeRIC: false
  });

  
  function generateRandomRIC(callback) {
    let r, i, c;

    do {
      r = Math.floor(Math.random() * 5) + 1;
      i = Math.floor(Math.random() * 5) + 1;
      c = Math.floor(Math.random() * 5) + 1;
    } while (
      (r === 5 && i === 5 && c === 5) ||
      (r === 1 && i === 1 && c === 1) ||
      (r === 5 && i === 5) ||
      (r === 5 && c === 5) ||
      (i === 5 && c === 5)
    );

    const ricValue =
    { ricScale : {
      risk: r,
      intensity: i,
      complexity: c},
      description: "check out our explaination of the RIC Scale under Variables!!",
      type: "RIC scale",
    };
    setRic(ricValue);
    if (callback) callback(ricValue)
  }

  const generateRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return random;
  };
  
  const createTask = () => {
    generateRandomRIC();
    const hold = preselect.excludeHold
      ? null
      : preselect.holdType || HOLDS[generateRandom(HOLDS)];
    const color = preselect.excludeColor
      ? null
      : preselect.colorType || COLORS[generateRandom(COLORS)];
    const move = preselect.excludeMove
      ? null
      : preselect.moveType || MOVES[generateRandom(MOVES)];
    const terrain = preselect.excludeTerrain
      ? null
      : preselect.terrainType || TERRAINS[generateRandom(TERRAINS)];

    const feeling = preselect.excludeFeeling
      ? null
      : preselect.feelingType || FEELINGS[generateRandom(FEELINGS)];
    const start = preselect.excludeStart
      ? null
      : preselect.startType || STARTS[generateRandom(STARTS)];
    const topic = preselect.excludeTopic
      ? null
      : preselect.topicType || TOPICS[generateRandom(TOPICS)];
    const style = preselect.excludeStyle
      ? null
      : preselect.styleType || STYLES[generateRandom(STYLES)];
    const amount = preselect.excludeAmount
      ? null
      : preselect.amountType || AMOUNTOFMOVES[generateRandom(AMOUNTOFMOVES)];
      // const ricScale = preselect.excludeRIC
      // ? null
      // : ric;

      generateRandomRIC((ricValue) => {
    setTask({
      ...(preselect.excludeHold ? {} : { holdType: hold }),
      ...(preselect.excludeColor ? {} : { colorType: color }),
      ...(preselect.excludeMove ? {} : { moveType: move }),
      ...(preselect.excludeTerrain ? {} : { terrainType: terrain }),
      ...(preselect.excludeFeeling ? {} : { feelingType: feeling }),
      ...(preselect.excludeStart ? {} : { startType: start }),
      ...(preselect.excludeTopic ? {} : { topicType: topic }),
      ...(preselect.excludeStyle ? {} : { styleType: style }),
      ...(preselect.excludeAmount ? {} : { amountType: amount }),
      ...(preselect.excludeRIC ? {} : { ricType: ricValue})
    });
  });

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
    setSelector(false);
  };

  useEffect(() => {
    console.log("ric score from inside useEffect", ric);
  }, [ric]);

  useEffect(()=> {
    console.log("task from from inside useEffect", task)
  }, [task]);

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

  const toggleExcludeHold = () =>
    setPreselect((prev) => ({ ...prev, excludeHold: !prev.excludeHold }));
  const toggleExcludeColor = () =>
    setPreselect((prev) => ({ ...prev, excludeColor: !prev.excludeColor }));
  const toggleExcludeMove = () =>
    setPreselect((prev) => ({ ...prev, excludeMove: !prev.excludeMove }));
  const toggleExcludeTerrain = () =>
    setPreselect((prev) => ({ ...prev, excludeTerrain: !prev.excludeTerrain }));
  const toggleExcludeFeeling = () =>
    setPreselect((prev) => ({ ...prev, excludeFeeling: !prev.excludeFeeling }));
  const toggleExcludeStart = () =>
    setPreselect((prev) => ({ ...prev, excludeStart: !prev.excludeStart }));
  const toggleExcludeTopic = () =>
    setPreselect((prev) => ({ ...prev, excludeTopic: !prev.excludeTopic }));
  const toggleExcludeStyle = () =>
    setPreselect((prev) => ({ ...prev, excludeStyle: !prev.excludeStyle }));
  const toggleExcludeAmount = () =>
    setPreselect((prev) => ({ ...prev, excludeAmount: !prev.excludeAmount }));
    const toggleExcludeRIC = () =>
    setPreselect((prev) => ({ ...prev, excludeRIC: !prev.excludeRIC }));

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
          preselect.holdType !== null ||
          preselect.feelingType !== null ||
          preselect.startType !== null ||
          preselect.topicType !== null ||
          preselect.styleType !== null ||
          preselect.amountType !== null ||
          preselect.excludeColor === true ||
          preselect.excludeMove === true ||
          preselect.excludeTerrain === true ||
          preselect.excludeHold === true ||
          preselect.excludeFeeling === true ||
          preselect.excludeStart === true ||
          preselect.excludeTopic === true ||
          preselect.excludeStyle === true ||
          preselect.excludeAmount === true ||
          preselect.excludeRIC === true
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
          {/* COLOR Section */}
          <div className="text-center">
            <h3>
              <b>COLOR</b>
            </h3>

            <button className="btnnav btn-red" onClick={toggleExcludeColor}>
              {!preselect.excludeColor ? "Exclude COLOR" : "Include COLOR"}
            </button>
            {!preselect.excludeColor && (
              <>
                <button onClick={clearColorSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
                {COLORS.map((color, index) => (
                  <div
                    key={index}
                    className={
                      preselect.colorType === color ? "bg-gray-500" : ""
                    }
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
              </>
            )}
          </div>

          {/* MOVE Section */}
          <div className="text-center">
            <h3>
              <b>MOVE</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeMove}>
              {!preselect.excludeMove ? "Exclude MOVE" : "Include MOVE"}
            </button>
            {!preselect.excludeMove && (
              <>
                <button onClick={clearMoveSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
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
              </>
            )}
          </div>

          {/* TERRAIN Section */}
          <div className="text-center">
            <h3>
              <b>TERRAIN</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeTerrain}>
              {!preselect.excludeTerrain
                ? "Exclude TERRAIN"
                : "Include TERRAIN"}
            </button>
            {!preselect.excludeTerrain && (
              <>
                <button
                  onClick={clearTerrainSelect}
                  className="btnnav btn-blue"
                >
                  CLEAR THIS OPTION
                </button>
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
              </>
            )}
          </div>

          {/* HOLD Section */}
          <div className="text-center">
            <h3>
              <b>HOLD</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeHold}>
              {!preselect.excludeHold ? "Exclude HOLD" : "Include HOLD"}
            </button>
            {!preselect.excludeHold && (
              <>
                <button onClick={clearHoldSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
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
              </>
            )}
          </div>

          {/* FEELING Section */}
          <div className="text-center">
            <h3>
              <b>FEELING</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeFeeling}>
              {!preselect.excludeFeeling
                ? "Exclude FEELING"
                : "Include FEELING"}
            </button>
            {!preselect.excludeFeeling && (
              <>
                <button
                  onClick={clearFeelingSelect}
                  className="btnnav btn-blue"
                >
                  CLEAR THIS OPTION
                </button>
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
              </>
            )}
          </div>

          {/* START Section */}
          <div className="text-center">
            <h3>
              <b>START</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeStart}>
              {!preselect.excludeStart ? "Exclude START" : "Include START"}
            </button>
            {!preselect.excludeStart && (
              <>
                <button onClick={clearStartSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
                {STARTS.map((start, index) => (
                  <div
                    key={index}
                    className={
                      preselect.startType === start ? "bg-gray-500" : ""
                    }
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
              </>
            )}
          </div>

          {/* TOPIC Section */}
          <div className="text-center">
            <h3>
              <b>TOPIC</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeTopic}>
              {!preselect.excludeTopic ? "Exclude TOPIC" : "Include TOPIC"}
            </button>
            {!preselect.excludeTopic && (
              <>
                <button onClick={clearTopicSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
                {TOPICS.map((topic, index) => (
                  <div
                    key={index}
                    className={
                      preselect.topicType === topic ? "bg-gray-500" : ""
                    }
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
              </>
            )}
          </div>

          {/* STYLE Section */}
          <div className="text-center">
            <h3>
              <b>STYLE</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeStyle}>
              {!preselect.excludeStyle ? "Exclude STYLE" : "Include STYLE"}
            </button>
            {!preselect.excludeStyle && (
              <>
                <button onClick={clearStyleSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
                {STYLES.map((style, index) => (
                  <div
                    key={index}
                    className={
                      preselect.styleType === style ? "bg-gray-500" : ""
                    }
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
              </>
            )}
          </div>

          {/* AMOUNT Section */}
          <div className="text-center">
            <h3>
              <b>AMOUNT</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeAmount}>
              {!preselect.excludeAmount ? "Exclude AMOUNT" : "Include AMOUNT"}
            </button>
            {!preselect.excludeAmount && (
              <>
                <button onClick={clearAmountSelect} className="btnnav btn-blue">
                  CLEAR THIS OPTION
                </button>
                {AMOUNTOFMOVES.map((amount, index) => (
                  <div
                    key={index}
                    className={
                      preselect.amountType === amount ? "bg-gray-500" : ""
                    }
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
              </>
            )}
          </div>

          {/* RIC Scale Section */}
          <div className="text-center">
            <h3>
              <b>RIC SCALE</b>
            </h3>
            <button className="btn btn-red" onClick={toggleExcludeRIC}>
              {!preselect.excludeRIC ? "Exclude SCALE" : "Include SCALE"}
            </button>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
