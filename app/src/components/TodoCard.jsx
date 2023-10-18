import { useState } from "react";

const TodoCard = ({ handleAdd }) => {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAdd(content);
    setContent("");
  }
  return (
    <>
      <form className="list-group" onSubmit={(e) => handleSubmit(e)}>
        <div className="list-item title">
          <button>X</button>
        </div>
        <div className="list-item-message">
          <input
            // contentEditable="true"
            className="textarea"
            placeholder="Enter text..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></input>
        </div>
        <div className="list-item time">
          last updated <time></time>
        </div>
      </form>
    </>
  );
};

export default TodoCard;
