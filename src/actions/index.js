export const addDentist = (dentist) => {
  return {
    type: 'ADD_DENTIST',
    payload: dentist,
  }
}

export const makeDentistSick = (index) => {
  return {
    type: 'MAKE_DENTIST_SICK',
    payload: index,
  }
}

export const addClient = (client) => {
  return {
    type: 'ADD_CLIENT',
    payload: client,
  }
}

export const addAppointment = (appointment) => {
  return {
    type: 'ADD_APPOINTMENT',
    payload: appointment,
  }
}

export const deleteAppointment = (day, time) => {
  return {
    type: 'DELETE_APPOINTMENT',
    payload: { day, time },
  }
}
