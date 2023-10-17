import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/Todo-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
