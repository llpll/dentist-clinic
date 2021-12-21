const canAddAppointment = (state, newAppointment) => {
  if (newAppointment.dentist === '') {
    alert('Appointment requires a dentist!')
    return false
  }

  for (const [key, appointmentsInDay] of Object.values(state).entries()) {
    const day = key + 1
    if (newAppointment.day !== day) {
      continue
    }

    for (const appointment of appointmentsInDay) {
      if (appointment.time !== newAppointment.time) {
        continue
      } else {
        if (appointment.dentist === newAppointment.dentist) {
          alert('Dentist already booked at this time!')
          return false
        }

        if (appointment.assistant === newAppointment.assistant) {
          alert('Assistant already booked at this time!')
          return false
        }
      }
    }
  }

  return true
}

const appointment = (state = {}, action) => {
  let appointment = action.payload
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_APPOINTMENT':
      if (!canAddAppointment(state, appointment)) {
        return state
      }

      if (!newState.hasOwnProperty(appointment.day)) {
        newState[appointment.day] = []
      }
      newState[appointment.day].push(appointment)
      return newState
    case 'DELETE_APPOINTMENT':
      let timeIndex = 0
      for (const [index, appointment] of newState[
        action.payload.day
      ].entries()) {
        if (action.payload.day === appointment.time) {
          timeIndex = index
          break
        }
      }
      newState[action.payload.day].splice(timeIndex, 1)
      return newState

    default:
      return state
  }
}

export default appointment
