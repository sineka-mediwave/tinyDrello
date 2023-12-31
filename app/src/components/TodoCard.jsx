import { useState } from "react";

const TodoCard = (props) => {
  const { handleDelete, editContent, task, onDragStart, onDragOver } = props;
  const [content, setContent] = useState(task.text);

  const convertTime24_12 = (t) => {
    let [h, ...rest] = t.split(":");
    return (
      (h == "12" ? "12" : h % 12) +
      ":" +
      rest.join(":") +
      (h < 12 ? " AM" : " PM")
    );
  };
  function handleDeleteClick(taskId) {
    handleDelete(taskId);
  }
  function handleEditContent(id) {
    editContent(content, id);
  }

  return (
    <>
      <form className="list-group">
        <div
          className="list-item title"
          draggable
          onDragStart={(e) => onDragStart(e, task.id)}
          onDragOver={(e) => onDragOver(e)}
        >
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
          last updated
          <time className="px-2">{convertTime24_12(task.time)}</time>
        </div>
      </form>
    </>
  );
};

export default TodoCard;
