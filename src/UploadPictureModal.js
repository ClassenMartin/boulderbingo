import React, { useState } from "react";

function UploadPictureModal({ uploadPicture, closePictureModal }) {
  const [uploadedPicture, setUploadedPicture] = useState(null);
  // const [completeUpload, setCompleteUpload] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPicture(file);
    }
  };

  const handleSubmit = () => {
    if (uploadedPicture) {
      uploadPicture(uploadedPicture); 
      // setCompleteUpload(true);
      console.log('uploaded picture')

    } else {
      alert("Please select a picture to upload.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <h3 className="mb-4 text-lg font-bold">Upload Picture</h3>
        
        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        {/* Preview */}
        {uploadedPicture && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(uploadedPicture)}
              alt="Preview"
              className="w-full h-auto max-h-64 object-contain border"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={closePictureModal}
            className="btnnav btn-red"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="btnnav btn-blue"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadPictureModal;