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
    <div className="container">
      <h1>Drello</h1>
      <div className="row ">
        <Todo />
        <div className="col-sm taskDiv">
          <h2>In Progress</h2>
        </div>
        <div className="col-sm taskDiv">
          <h2>Completed</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
