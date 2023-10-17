import TodoCard from "./TodoCard";
const Todo = () => {
  return (
    <div className="col-sm taskDiv">
      <div className="d-flex justify-content-between mb-3">
        <h2>Todo</h2>
        <button className="btn btn-light"> + </button>
      </div>
      <TodoCard />
    </div>
  );
};

export default Todo;
