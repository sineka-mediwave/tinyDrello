import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
const Todo = ({ handleAdd, handleDelete, handleEdit, todos }) => {
  const [todoCard, setTodoCard] = useState(todos);
  const updateAdd = (value, id) => {
    handleAdd(value, id);
  };

  function handleDragStart(e, id) {
    e.dataTransfer.setData("id", id);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("moving");
  };

  useEffect(() => {
    const filtered = todos.filter((t) => t.inState === "todo");
    setTodoCard(filtered);
  }, [todos]);

  return (
    <div>
      {/* {card.map((card, index) update
          <div key={index}>{card}</div>
        ))} */}

      {todoCard.map((t) => (
        <div key={t.id}>
          <TodoCard
            sendAdd={updateAdd}
            handleDelete={handleDelete}
            editContent={handleEdit}
            task={t}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
