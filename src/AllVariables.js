import React, { useState } from "react";
import Variable from "./Variable";
import {
  HOLDS,
  COLORS,
  MOVES,
  TERRAINS,
  AMOUNTOFMOVES,
  STYLES,
  TOPICS,
  FEELINGS,
  STARTS,
  GRADES,
  LEVELS,
} from "./variablesFile";
import RIC from "./RIC";

function AllVariables() {
  const [isRic, setIsRic] = useState(false);

  const variableData = [
    { title: "holds", content: HOLDS },
    { title: "colors", content: COLORS },
    { title: "moves", content: MOVES },
    { title: "terrains", content: TERRAINS },
    { title: "amount of moves", content: AMOUNTOFMOVES },
    { title: "styles", content: STYLES },
    { title: "feelings", content: FEELINGS },
    { title: "topics", content: TOPICS },
    { title: "starts", content: STARTS },
    { title: "grades", content: GRADES },
    { title: "levels", content: LEVELS },
  ];

  const toggleOpen = () => {
    setIsRic((prev) => setIsRic(!prev));
  };

  return (
    <div className="h-screen">
      <h2 className="header my-4">Overview of all variables</h2>
      <button
        onClick={toggleOpen}
        className="w-full text-center font-black py-3 bg-blue-400 hover:bg-blue-500 mb-10 border-black border-2"
      >
        RIC Scale
      </button>
      {isRic && <RIC />}
      <div>
        {variableData.map((variable, index) => (
          <Variable
            key={index}
            content={variable.content}
            title={variable.title}
          />
        ))}
      </div>
    </div>
  );
}

export default AllVariables;
