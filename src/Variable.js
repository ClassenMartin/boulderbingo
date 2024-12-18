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
          {variableArray.map((variable, index) =>
            Object.keys(variable).length === 5 ? (
              <div
                key={index}
                className={`flex justify-between ${
                  index % 2 === 0 ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex-grow w-[calc(25%)] p-2">
                  <b>name:</b> {variable?.name}
                </div>

                <div className="flex-grow w-[calc(25%)] p-2">
                  <image className="w-1/2" src={variable?.image} alt="" />
                </div>

                <div className="flex-grow w-[calc(25%)] p-2">
                  <b>Definition:</b> {variable?.description}
                </div>

                <div className="flex-grow w-[calc(25%)] p-2">
                  <b>V scale:</b> {variable?.vScale}
                </div>
              </div>
            ) : (
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
                    <img
                      src={variable?.image}
                      className="border-black border-2 w-1/2"
                      alt=""
                    />
                  </div>
                )}
                <div className="flex-grow w-[calc(33%)] p-2">
                  <b>Definition:</b> {variable?.description}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Variable;
