import React from 'react'
import 'babel-polyfill';
import Beers from './Beers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/beers' component={Beers}>

      </Route>
    </Router>
  )
}

export default App
