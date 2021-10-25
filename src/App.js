import { TaskList } from "./components/TaskList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import Login from "./components/Login";
import Card from "./components/Card";

function App() {
  return (
    

    <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/add" >
              <TaskList />
            </Route>
            <Route path="/card" >
              <Card />
            </Route>
            <Route path="/tasks/:taskId">
              <TaskForm />
            </Route>
            <Route>
              <div>Page Not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
