import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { PrivateRoute, PublicRouter } from './helpers';
import { Dashboard, Home }  from './components';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <div class="container">
          <ul class="list-group">
            <li class="list-group-item">
              <Link to='/'>Home</Link>
            </li>
            <li class="list-group-item">
              <Link to='/login'>Login</Link>
            </li>
            <li class="list-group-item">
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>

          <PublicRouter exact={true} path={'/'} component={Home}/>
          <PublicRouter path={'/login'} component={Login}/>
          <PrivateRoute path={'/dashboard'} component={Dashboard}/>
        </div>
      </Router>
    </>
  );
}

export default App;
