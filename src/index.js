import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Team from './views/team'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Team} path="/team" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
