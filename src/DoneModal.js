import React, { useState } from "react";

function DoneModal({ modalContent, closeModal }) {
  
  const content = JSON.stringify(modalContent || null);
  
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center w-full">
      <div className="bg-white p-6 rounded shadow-md w-1/2 w-full">
        <div>{content}</div>
        <p>{modalContent.date.toLocaleString()}</p>
        <button className="btnnav btn-red" onClick={closeModal}> Close Modal</button>
        <button className="btnnav btn-blue">Share</button>
      </div>
    </div>
  );
}

export default DoneModal;
