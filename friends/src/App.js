import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      <Switch>
        <PrivateRoute exact path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
      
    </div>

    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/public">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <Route path="/public" component={Public} />
//       <Route path="/login" component={Login} />
//     </div>
//   );
// }