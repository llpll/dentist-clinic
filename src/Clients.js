import React from 'react'
import { useDispatch } from 'react-redux'
import AddNewClient from './AddNewClient'

function Clients(props) {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {props.clients.map((client, index) => {
          return (
            <li>
              {index} - {client.name}
            </li>
          )
        })}
      </ul>
      <br />
      <AddNewClient dispatcher={dispatch} />
    </div>
  )
}

export default Clients
