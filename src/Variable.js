
import React, { useState } from "react";

function Variable({ content, title }) {
  const [isOpen, setIsOpen] = useState(false);  
  const [variableArray] = useState(content || []);

  
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-10 flex flex-col border-black border-2 rounded">
      
      <button
        onClick={toggleOpen}
        className="w-full text-center font-black py-3 bg-blue-400 hover:bg-blue-500"
      >
        Sort of variable: {title}
      </button>

      
      {isOpen && (
        <div className="pt-3">
          {variableArray.map((variable, index) => (
            <div
              key={index}
              className={`flex justify-between ${
                index % 2 === 0 ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex-grow w-[calc(33%)] p-2">
                <b>name:</b> {variable?.name}
              </div>
              {variable?.rgb ? (
                <div className="flex-grow w-[calc(33%)] p-2">
                  <b>color:</b> {variable?.rgb}
                </div>
              ) : (
                <div className="flex-grow w-[calc(33%)] p-2">
                  <b>pictogram:</b> {variable?.image}
                </div>
              )}
              <div className="flex-grow w-[calc(33%)] p-2">
                <b>Definition:</b> {variable?.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Variable;
