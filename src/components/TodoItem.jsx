const TodoItem = ({
  todos,
  onToggle,
  onDelete,
  editingTodoId,
  editText,
  setEditText,
  onStartEditing,
  onSave,
  onCancel,
}) => {
  return (
    <div>
      <div>
        {todos.id === editingTodoId ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={() => onSave(todos.id)}>Save</button>
            <button onClick={() => onCancel()}>Cancel</button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => onToggle(todos.id)}
            />
            {todos.text}
            <button onClick={() => onStartEditing(todos)}>Edit</button>
            <button onClick={() => onDelete(todos.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
