import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hello from "./components/Hello"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/hello/:name">
            <Hello />
          </Route>
          <Route>
            <div>
              Index
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
