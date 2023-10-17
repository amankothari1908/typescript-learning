import React, { ReactNode, createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: React.FC<TodoContextProviderProps> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: todoHandler,
    removeTodo: removeHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
