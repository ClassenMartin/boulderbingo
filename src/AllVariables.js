import React from "react";
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
} from "./variablesFile";
import RIC from "./RIC";

function AllVariables() {
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
  ];

  return (
    <div className="h-screen">
      <h2 className="header my-4">Overview of all variables</h2>
      <div>
        {variableData.map((variable, index) => (
          <Variable
            key={index}
            content={variable.content}
            title={variable.title}
          />
        ))}
      </div>
      <RIC />
    </div>
  );
}

export default AllVariables;
