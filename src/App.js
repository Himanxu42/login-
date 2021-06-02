import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Signup}/> 
      <Route path='/Login' > <Login/></Route>
    </Switch>
 
    </Router>
  )
}

export default App
