import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardHome from './pages/Home/Dashboard/DashboardHome/DashboardHome';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Login />
          </Route>
          <Route path="/dashboard">
            <DashboardHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
