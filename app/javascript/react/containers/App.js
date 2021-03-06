import React from 'react'
import 'babel-polyfill';
import BeersContainer from './BeersContainer';
import BeerShowContainer from './BeerShowContainer';
import ReviewForm from '../components/ReviewForm';
import NewBeerForm from '../components/NewBeerForm';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={BeersContainer} />
      <Route path='/beers/:id' >
        <IndexRoute component={BeerShowContainer} />
        <Route path='reviews/new' component={ReviewForm}/>
        <Route path='/beer/new' component={NewBeerForm}/>
      </Route>
    </Router>
  )
}

export default App
