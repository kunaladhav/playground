const NotesItem = ({ note, onPinnedNotes, onDeleteNotes }) => {
  return (
    <div>
      <div>
        {note.text}
        <button onClick={() => onPinnedNotes(note.id)}>Pin</button>
        <button onClick={() => onDeleteNotes(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NotesItem;
