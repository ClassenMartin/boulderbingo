import React from "react";

function InfoModal({ info, closeModal }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <p className="p-2">{info}</p>
        <div className="flex">
          <button onClick={closeModal} className="btnnav btn-red">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
