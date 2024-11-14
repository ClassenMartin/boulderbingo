import React from "react";

function NotFoundModal({searchTerm, setNotFoundModal}){

    const notFound = searchTerm || null
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-1/2">
            <h3 className="mb-4 text-lg font-bold">Not Found</h3>
            <p>we could find what you are looking for. Check the spelling</p>
           <p>You looked for: <b>{notFound}</b></p>
           <button   onClick={()=> setNotFoundModal(false)}
            className="btnnav btn-blue">Close</button>
            
          </div>
        </div>
      );
};

export default NotFoundModal;