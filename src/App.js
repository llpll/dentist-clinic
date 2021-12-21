import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import Calendar from './Calendar'
import Day from './Day'
import Personeel from './Personeel'
import Clients from './Clients'

function App() {
  const dentists = useSelector((state) => state.dentists)
  const assistants = useSelector((state) => state.assistants)
  const clients = useSelector((state) => state.clients)
  const appointments = useSelector((state) => state.appointments)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/calendar'>Calendar view</Link>
            </li>
            <li>
              <Link to='/day'>Day view</Link>
            </li>
            <li>
              <Link to='/personeel'>Personeel</Link>
            </li>
            <li>
              <Link to='/clients'>Clients</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path='/calendar'>
              <Calendar
                appointments={appointments}
                dentists={dentists}
                assistants={assistants}
                clients={clients}
              />
            </Route>
            <Route path='/day'>
              <Day appointments={appointments[1]} dentists={dentists} />
            </Route>
            <Route path='/personeel'>
              <Personeel
                dentists={dentists}
                assistants={assistants}
                clients={clients}
              />
            </Route>
            <Route path='/clients'>
              <Clients clients={clients} />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
