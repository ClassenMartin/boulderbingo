import React from "react";

function WarningModal({ closeWarningModal }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <p className="p-2">Please add a title to the task to save it! plus make sure you upload a picture or video now!</p>
        <div className="flex">
          <button onClick={closeWarningModal} className="btnnav btn-red">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarningModal;