import { useState } from "react";

import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Practice DSA", completed: false },
  { id: 3, text: "Go to the gym", completed: true },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  const startEditing = (todo) => {
    setEditingTodoId(todo.id);
    setEditText(todo.text);
  };

  const saveTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, text: editText };
        }
        return item;
      }),
    );
    setEditingTodoId(null);
    setEditText("");
  };

  const cancelTodo = () => {
    setEditingTodoId(null);
    setEditText("");
  };

  return (
    <div>
      <div>
        <p>My Todos</p>
        <div>
          {todos.map((item) => (
            <TodoItem
              todos={item}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              editingTodoId={editingTodoId}
              editText={editText}
              setEditText={setEditText}
              onStartEditing={startEditing}
              onSave={saveTodo}
              onCancel={cancelTodo}
            />
          ))}
        </div>
        <p>Count : {todos.filter((item) => !item.completed).length}</p>
      </div>
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
