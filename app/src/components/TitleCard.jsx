import TodoCard from "./TodoCard";

const TitleCard = ({ title, todos, handleAdd, handleDelete, handleEdit }) => {
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

  return (
    <>
      <div className="task-header">
        <h2>{title}</h2>
        {title == "Todo" && <button onClick={() => handleAdd("")}>+</button>}
      </div>
      <div>
        {todos
          .filter((t) => t.inState == { title })
          .map((t) => (
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
    </>
  );
};

export default TitleCard;
