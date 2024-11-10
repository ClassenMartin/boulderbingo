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
} from "./variablesFile";

function AllVariables() {
  return (
    <div className="App">
      <h2>Overview of all variables</h2>
      <div className="overviewContainer">
        <Variable content={HOLDS} title={"holds"}/>
        <Variable content={COLORS} title={"colors"}/>
        <Variable content={MOVES} title={"moves"}/>
        <Variable content={TERRAINS} title={"terrains"}/>
        <Variable content={AMOUNTOFMOVES} title={"amount of moves"}/>
        <Variable content={STYLES} title={"styles"}/>
        <Variable content={FEELINGS} title={"feelings"}/>
        <Variable content={TOPICS} title={"topics"}/>
        <Variable content={STARTS} title={"starts"}/>
      </div>
    </div>
  );
}

export default AllVariables;
