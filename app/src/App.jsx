import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { useReducer } from "react";
import Todo from "./components/Todo";
function App() {
  // const [todos, dispatch] = useReducer(todoReducer, []);

  // function todoReducer(todos, action) {
  //   switch (action.type) {
  //     // case "TODO_CARD": {
  //     //   // <TodoCard />;
  //     // }
  //     case "TODO_ADD": {
  //       return [
  //         ...todos,
  //         {
  //           id: new Date().getTime(),
  //           message: action.value,
  //         },
  //       ];
  //     }
  //     default:
  //       throw Error("Unknown action: " + action.type);
  //   }
  // }

  // function handleAdd() {
  //   dispatch({
  //     type: "TODO_CARD",
  //   });
  // }

  return (
    <div>
      <header class="main-header">
        <h1>Drello</h1>
      </header>
      <div className="container ">
        <Todo />
        <div class="list-wrapper">
          <div class="taskDiv">
            <div class="task-header">
              <h2>In Progress</h2>
            </div>
          </div>
        </div>
        {/* <div className="col-sm"> */}
        <div class="list-wrapper">
          <div class="taskDiv">
            <div class="task-header">
              <h2>Completed</h2>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
