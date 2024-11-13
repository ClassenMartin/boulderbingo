import React, { useState } from "react";

function TitleModal({ title, onClose, onSave }) {
  const [titleValue, setTitleValue] = useState(title);
  console.log(title);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <h3 className="mb-4 text-lg font-bold">Add Title</h3>
        <input
          type="text"
          placeholder="Give a title to the task"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btnnav btn-red">
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(titleValue);
              setTitleValue(null);
            }}
            className="btnnav btn-blue"
          >
            Save Title
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleModal;
