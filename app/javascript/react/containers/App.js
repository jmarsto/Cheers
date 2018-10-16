import React from 'react'
import 'babel-polyfill';
import BeersContainer from './BeersContainer';
import BeerShowContainer from './BeerShowContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={BeersContainer} />
      <Route path='/beers/:id' component={BeerShowContainer} />
    </Router>
  )
}

export default App
