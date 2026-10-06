import { useState } from "react";
import NotesForm from "../components/NotesForm";
import NotesItem from "../components/NotesItem";
import NotesSearch from "../components/NotesSearch";

const initialNotes = [
  { id: 1, text: "Learn React", pinned: false },
  { id: 2, text: "Practice JavaScript", pinned: true },
];

const NotesApp = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
      pinned: false,
    };

    setNotes([...notes, newNote]);
  };

  const filteredList = notes.filter((item) => {
    return item.text.toLowerCase().includes(searchText.toLowerCase());
  });

  const deleteNotes = (id) => {
    setNotes(
      notes.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  const pinnedNotes = (id) => {
    setNotes(
      notes.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            pinned: !item.pinned,
          };
        }
        return item;
      }),
    );
  };

  const pinnedList = filteredList.filter((item) => item.pinned);
  const unpinnedList = filteredList.filter((item) => !item.pinned);

  const displayNotes = [...pinnedList, ...unpinnedList];

  return (
    <div>
      <div>
        <NotesSearch searchText={searchText} setSearchText={setSearchText} />
        <NotesForm onAddNote={addNote} />
        {displayNotes.map((item) => (
          <div>
            <NotesItem
              note={item}
              onPinnedNotes={pinnedNotes}
              onDeleteNotes={deleteNotes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
