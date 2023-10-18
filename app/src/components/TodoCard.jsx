const TodoCard = () => {
  return (
    <>
      <div class="list-group">
        <span class="list-item-message" contenteditable="true">
          adding more lines to the content Edit this content to add your own
          quote
        </span>
        <div class="list-item-time">
          last updated <time>5.36 a.m</time>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
