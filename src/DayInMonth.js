import React from 'react'
import AppointmentInMonth from './AppointmentInMonth'

export default ({ appointments, dentists }) => {
  const appointmentsJSX = appointments.map(
    ({ day, time, patient, dentist, dentistId }, index) => (
      <AppointmentInMonth
        day={day}
        time={time}
        patient={patient}
        dentist={dentist}
        dentistIsSick={dentists[dentistId] ? dentists[dentistId].isSick : false}
        key={index}
      />
    )
  )
  return <div className='day'>{appointmentsJSX}</div>
}
