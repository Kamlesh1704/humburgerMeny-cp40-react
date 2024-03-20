import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
