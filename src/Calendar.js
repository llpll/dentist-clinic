import React from 'react'
import AddNewAppointment from './AddNewAppointment'
import './Calendar.css'
import DayInMonth from './DayInMonth'
import { useDispatch } from 'react-redux'
import { sortAssortmentsInDay } from './utils'

export default ({ appointments, dentists, assistants, clients }) => {
  const daysInMonthJSX = Object.values(appointments).map(
    (appointmentsInDay, index) => {
      appointmentsInDay.sort(sortAssortmentsInDay)
      return (
        <DayInMonth
          appointments={appointmentsInDay}
          key={index}
          dentists={dentists}
        />
      )
    }
  )
  const dispatch = useDispatch()

  return (
    <div>
      <div className='newAppointment'>
        <h2>Make new appointment</h2>
        <AddNewAppointment
          dentists={dentists}
          assistants={assistants}
          clients={clients}
          dispatcher={dispatch}
        />
      </div>
      <div className='calendarview'>
        <h2>Appointments</h2>
        <div className='header'>
          <div>Maandag</div>
          <div>Dinsdag</div>
          <div>Woensdag</div>
          <div>Donderdag</div>
          <div>Vrijdag</div>
        </div>
        <div className='table'>{daysInMonthJSX}</div>
      </div>
    </div>
  )
}
