import TodoCard from "./TodoCard";
import { useState } from "react";
const Todo = ({ handleAdd }) => {
  const [card, setCard] = useState([]);

  const addCard = () => {
    const newCard = [...card, <TodoCard />];
    setCard(newCard);
  };
  return (
    <div className="taskDiv">
      <div className="task-header">
        <h2>Todo</h2>
        <button onClick={addCard}>+</button>
      </div>
      <div>
        {card.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      <TodoCard handleAdd={handleAdd} />
    </div>
  );
};

export default Todo;
