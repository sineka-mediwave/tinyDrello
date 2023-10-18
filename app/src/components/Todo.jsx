import TodoCard from "./TodoCard";
import { useState } from "react";
const Todo = () => {
  const [card, setCard] = useState([]);

  const addCard = () => {
    const newCard = [...card, <TodoCard />];
    setCard(newCard);
  };
  return (
    <div className="list-wrapper">
      <div className="taskDiv">
        <div className="task-header">
          <h2>Todo</h2>
          <button onClick={addCard}>+</button>
        </div>
        <div className="task-card">
          {card.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
        <TodoCard />
      </div>
    </div>
  );
};

export default Todo;
