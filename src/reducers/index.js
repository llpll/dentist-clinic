import dentist from './dentist'
import client from './client'
import assistant from './assistant'
import appointment from './appointment'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  dentists: dentist,
  clients: client,
  assistants: assistant,
  appointments: appointment,
})

export default allReducers
