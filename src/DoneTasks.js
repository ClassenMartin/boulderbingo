import React, { useState } from "react";
import DoneModal from "./DoneModal";
import NotFoundModal from "./NotFoundModal";
import Switch from "@mui/material/Switch";

function DoneTasks({ doneTasks }) {
  const [isDoneTasks, setIsDoneTasks] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMatch, setSearchMatch] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [notFoundModal, setNotFoundModal] = useState(false);
  const [searchType, setSearchType] = useState("title");

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

    if (searchType === "title") {
      doneTasks.forEach((task) => {
        const match = task.title === value;
        if (match) {
          matches.push(task);
        }
      });
    } else {
      for (let i = 0; i < doneTasks.length; i++) {
        if (Object.values(doneTasks[i]).some((type) => type.name === value))
          matches.push(doneTasks[i]);
      }
    }

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
  };

  const handleSearchSwitch = (value) => {
    setSearchType(value.target.checked ? "variable" : "title");
  };
  return (
    <div className="h-screen">
      <h2 className="header my-4">Your done tasks</h2>

      <div>
        <b>Search by Title</b>
        <Switch
          onChange={handleSearchSwitch}
          checked={searchType === "variable"}
        />
        <b>Search by Variable</b>
      </div>
      {searchType === "title" && (
        <div>
          <label className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              placeholder="insert title you are looking for"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border mb-4 rounded"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search(searchTerm);
                }
              }}
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
      )}

      {searchType === "variable" && (
        <div>
          <label className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              placeholder="insert variable for example: dyno, sitstart, red..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border mb-4 rounded"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search(searchTerm);
                }
              }}
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
      )}

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
