import { useState } from "react";
import RevisionTodoForm from "../components/RevisionTodoForm";
import RevisionTodoItem from "../components/RevisionTodoItem";

const initialTodos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Practice JavaScript" },
];

const RevisionTodo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  const onEditingTask = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, text: editText };
        }
        return item;
      }),
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div>
      <div>
        <RevisionTodoForm onAddTodo={addTodo} />
        {todos.map((item) => (
          <RevisionTodoItem
            todos={item}
            onEditingTask={onEditingTask}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            onSaveEdit={saveEdit}
            onCancelEdit={cancelEdit}
            onDeleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default RevisionTodo;
