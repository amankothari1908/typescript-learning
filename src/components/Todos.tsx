import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/Todo-context";

const Todos = () => {
  const todoCnxt = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoCnxt.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.text}
          onRemoveTodo={todoCnxt.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
