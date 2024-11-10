import React from "react";
import { useState } from "react";

function Variable({ content, title }) {
  const [variableArray, setVariableArray] = useState(content || []);
  return (
    <div className="mapped">
      <h2>Sort of variable: {title}</h2>
      {variableArray.map((variable, index) => (
        <div key={index} className="singleVariable">
          <div>
            <h4>{variable?.name}</h4>
          </div>
          {variable?.rgb ? (
            <div>
              <b>color:</b> {variable?.rgb}
            </div>
          ) : (
            <div>
              <b>pictogram:</b> {variable?.image}
            </div>
          )}
          <div>
            <b>Definition:</b> {variable?.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Variable;
