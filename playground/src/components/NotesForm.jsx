import { useState } from "react";

const NotesForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 0) {
      onAddNote(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add New Note"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NotesForm;
