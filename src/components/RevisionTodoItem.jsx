const RevisionTodoItem = ({
  todos,
  onEditingTask,
  editingId,
  editText,
  setEditText,
  onSaveEdit,
  onCancelEdit,
  onDeleteTodo,
}) => {
  return (
    <div>
      <div>
        {todos.id === editingId ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={() => onSaveEdit(todos.id)}>Save</button>
            <button onClick={() => onCancelEdit()}>Cancel</button>
          </div>
        ) : (
          <div>
            {todos.text}
            <button onClick={() => onEditingTask(todos)}>Edit</button>
            <button onClick={() => onDeleteTodo(todos.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevisionTodoItem;
