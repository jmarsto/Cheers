import React from 'react'
import 'babel-polyfill';
import BeersContainer from './BeersContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={BeersContainer}/>
    </Router>
  )
}

export default App
