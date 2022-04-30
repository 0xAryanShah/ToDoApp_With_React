import TaskList from "./TaskList";
function App() {
  const tasks = [
    {id:0,description:'do this',done:false},
    {id:1,description:'do that',done:false},
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container-fluid bg-dark text-light p-5">
            <h1 className="display-4">TO DO List</h1>
            <hr/>
          </div>
          <TaskList tasks={tasks} />
        </div>
      </div>           
    </div>
    
  );
}

export default App;
