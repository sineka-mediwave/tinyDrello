const TitleCard = ({ title, handleAdd }) => {
  return (
    <div className="task-header">
      <h2>{title}</h2>
      {title == "Todo" && <button onClick={() => handleAdd("")}>+</button>}
    </div>
  );
};

export default TitleCard;
