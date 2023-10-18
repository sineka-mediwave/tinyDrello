import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducer } from "react";
import Todo from "./components/Todo";
function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
            inSate: "todo",
          },
        ];
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  function handleAdd(text) {
    dispatch({
      type: "TODO_ADD",
      value: text,
    });
  }
  return (
    <div>
      <header className="main-header">
        <h1>Drello</h1>
      </header>
      <div className="container ">
        <div className="list-wrapper">
          <Todo handleAdd={handleAdd} />
        </div>

        <div className="list-wrapper">
          <div className="taskDiv">
            <div className="task-header">
              <h2>In Progress</h2>
            </div>
          </div>
        </div>

        <div className="list-wrapper">
          <div className="taskDiv">
            <div className="task-header">
              <h2>Completed</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
