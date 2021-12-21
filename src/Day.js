import React from 'react'
import './Day.css'
import AppointmentInDay from './AppointmentInDay'

export default ({ appointments, dentists }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant, dentistId }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        dentistIsSick={dentists[dentistId] ? dentists[dentistId].isSick : false}
        key={index}
      />
    )
  )
  return <ul className='dayview'>{appointmentsJSX}</ul>
}
