import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="container">
      <h1>Drello</h1>
      <div className="row ">
        <div className="col-sm taskDiv">Todo</div>
        <div className="col-sm taskDiv">In Progress</div>
        <div className="col-sm taskDiv">Completed</div>
      </div>
    </div>
  );
}

export default App;
