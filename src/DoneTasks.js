import React, { useState } from "react";
import DoneModal from "./DoneModal";
import NotFoundModal from "./NotFoundModal";

function DoneTasks({ doneTasks }) {
  const [isDoneTasks, setIsDoneTasks] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMatch, setSearchMatch] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [notFoundModal, setNotFoundModal] = useState(false);

  const displayDoneTask = (task) => {
    setModalContent(task);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setModalContent("");
  };

  const search = (value) => {
    const matches = [];
    doneTasks.filter((task) => {
      const match = task.title === value;
      if (match) {
        console.log("task if true", task);
        matches.push(task);
      }
    });
    if (matches.length === 0) {
      setNotFoundModal(true);
    } else {
      setSearchMatch(matches);
      setIsDoneTasks(false);
      setIsSearch(true);
    }
    setSearchTerm("");
  };

  const resetSearch = () => {
    setSearchTerm("");
    setIsSearch(false);
    setIsDoneTasks(true);
  }

  return (
    <div className="h-screen">
      <h2 className="header my-4">Your done tasks</h2>
      <div>
        <b>search by title</b>
        <label className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            placeholder="insert title you are looking for"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <button
            className="btnnav btn-blue"
            onClick={() => search(searchTerm)}
          >
            Search
          </button>
          <button className="btnnav btn-blue" onClick={() => resetSearch()}>
            Reset
          </button>
        </label>
      </div>

      {doneTasks.length > 0 && isDoneTasks && (
        <div className="w-full flex border-black border-2 gap-2 p-2 flex-wrap">
          {doneTasks?.map((doneTask, index) => (
            <div
              key={index}
              className="border-black border-2 w-1/3"
              onClick={() => displayDoneTask(doneTask)}
            >
              <b>{doneTask.title}</b>
              <p>{doneTask.date.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {searchMatch?.length > 0 && isSearch && (
        <div className="w-full flex border-black border-2 gap-2 p-2 flex-wrap">
          {searchMatch?.map((match, index) => (
            <div
              key={index}
              className="border-black border-2 w-1/3"
              onClick={() => displayDoneTask(match)}
            >
              <b>{match.title}</b>
              <p>{match.date.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {isModal && (
        <DoneModal modalContent={modalContent} closeModal={closeModal} />
      )}
      {notFoundModal && (
        <NotFoundModal
          searchTerm={searchTerm}
          setNotFoundModal={setNotFoundModal}
        />
      )}
    </div>
  );
}

export default DoneTasks;
