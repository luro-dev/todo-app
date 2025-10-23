import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState } from "react";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];
  // var and setter function to set values
  // useState -> manipulates and manages data
  // Stateful variables are immutable

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  // Handler function
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]; // orig dupe
    setTodos(newTodoList);
  }

  function handleEditTodo() {}

  function handleDeleteTodo() {}

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
