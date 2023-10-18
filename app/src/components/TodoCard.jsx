import { useState } from "react";

const TodoCard = (props) => {
  const { sendAdd, handleDelete, editContent, task } = props;
  const [content, setContent] = useState("");

  function handleDeleteClick(taskId) {
    console.log(taskId);
    handleDelete(taskId);
  }
  function handleEditContent(id) {
    editContent(content, id);
  }

  return (
    <>
      <form className="list-group">
        <div className="list-item title" draggable>
          <button onClick={() => handleDeleteClick(task.id)}>X</button>
        </div>
        <div className="list-item-message">
          <textarea
            className="textarea"
            placeholder="Enter text..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => handleEditContent(task.id)}
            required
          />
        </div>
        <div className="list-item time">
          last updated <time>{new Date().getDate()}</time>
        </div>
      </form>
    </>
  );
};

export default TodoCard;
