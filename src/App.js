import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login/Login/Login';
import ExploreMore from './pages/ExploreMore/ExploreMore/ExploreMore';
import Registration from './pages/Login/Registration/Registration';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Purchase from './pages/Purchase/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/purchase/:_id">
              <Purchase></Purchase>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/explore">
              <ExploreMore></ExploreMore>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
