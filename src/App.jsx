import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState, useEffect } from "react";

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

  const [selectedTab, setSelectedTab] = useState("Open");

  // Handler function
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]; // orig dupe
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    // update / edit / modify
    const newTodoList = [...todos];
    let completedTodo = newTodoList[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
