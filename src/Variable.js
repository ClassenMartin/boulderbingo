import React from "react";
import { useState } from "react";

function Variable({ content, title }) {
    const [variableArray, setVariableArray] = useState(content || []);
  return (
    <div className="mapped">
        <h2>Sort of variable: {title}</h2>
      {variableArray.map((variable, index) => (
        <div key={index} className="singleVariable">
          <h4>{variable?.name}</h4>
          {variable?.rgb ? (
            <div>color: {variable?.rgb}</div>
          ) : (
            <div>pictogram: {variable?.image}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Variable;
