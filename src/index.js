import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import {
  generateRandomAppointmentsIds,
  getRandomName,
  sortAssortmentsInDay,
} from './utils'

const dentists = []
for (let index = 0; index < 5; index++) {
  const name = getRandomName()
  dentists.push({
    id: index,
    name: name,
    phone: '+31612345678',
    email: name + '@dentistcompanybvt.com',
    isSick: false,
  })
}

const assistants = []
for (let index = 1; index <= 2; index++) {
  const name = getRandomName()
  assistants.push({
    id: 'A' + Math.random().toString().substr(2, 4),
    name: name,
    phone: '+31612345678',
    email: name + '@dentistcompanybvt.com',
  })
}

const clients = []
for (let index = 1; index <= 50; index++) {
  const name = getRandomName()
  clients.push({
    id: parseInt(Math.random().toString().substr(2, 4)),
    name: name,
    phone: '+31612345678',
    email: name + '@dentistcompanybvt.com',
    birthYear: 1987,
  })
}

const appointments = generateRandomAppointmentsIds(150, dentists, assistants)
const divideByDay = (appointments) => {
  const appointmentsByDay = {}
  appointments.forEach((appointment) => {
    const day = appointment.day
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = []
    }
    appointmentsByDay[day].push(appointment)
  })

  Object.values(appointmentsByDay).map((appointmentsInDay) =>
    appointmentsInDay.sort(sortAssortmentsInDay)
  )

  return appointmentsByDay
}

let store = createStore(
  allReducers,
  {
    dentists: dentists,
    assistants: assistants,
    clients: clients,
    appointments: divideByDay(appointments),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
