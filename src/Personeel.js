import React from 'react'
import { useDispatch } from 'react-redux'
import { makeDentistSick } from './actions'
import AddNewDentist from './AddNewDentist'

function Personeel(props) {
  const dispatch = useDispatch()

  const handleMakeSick = (index) => {
    dispatch(makeDentistSick(index))
  }

  return (
    <div>
      <h1>Personeel</h1>
      <h2>Dentists</h2>
      <ul>
        {props.dentists.map((dentist, index) => {
          return (
            <li key={index}>
              {index} - {dentist.name}{' '}
              <button
                onClick={(event) => {
                  handleMakeSick(index)
                }}
              >
                Make sick
              </button>
            </li>
          )
        })}
      </ul>
      <br />
      <AddNewDentist dispatcher={dispatch} />
      <br />
      <br />
      <h2>Assistants</h2>
      <ul>
        {props.assistants.map((assistant, index) => {
          return (
            <li key={index}>
              {index} - {assistant.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Personeel
