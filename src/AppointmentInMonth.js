import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAppointment } from './actions'

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`)

export default ({ day, time, patient, dentist, dentistIsSick }) => {
  const dispatch = useDispatch()

  const handleDeleteAppointment = (day, time) => {
    dispatch(deleteAppointment(day, time))
  }

  return (
    <div className={dentistIsSick ? 'appointmentSick' : 'appointment'}>
      <span className='time'>
        <b>{format_time(time)}</b> @ {dentist}
      </span>
      <br />
      <span className='patient'>{patient}</span>
      <br />
      <a
        href='#'
        onClick={(e) => {
          handleDeleteAppointment(day, time)
        }}
      >
        Delete
      </a>
    </div>
  )
}
