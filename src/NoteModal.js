import React, { useState } from "react";

function NoteModal({ note, onClose, onSave }) {
  const [noteValue, setNoteValue] = useState(note);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <h3 className="mb-4 text-lg font-bold">Add Note</h3>
        <input
          type="text"
          placeholder="Add a note to the task"
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btnnav btn-red">Cancel</button>
          <button onClick={() => onSave(noteValue)} className="btnnav btn-blue">Save Note</button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;