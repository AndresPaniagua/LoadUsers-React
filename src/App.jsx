import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <Link to="/Users">Users </Link>
      <Link to="/"> Home</Link>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/Users" component={Users}></Route>
        <Route path="/UserDetails/:id" component={UserDetails}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
