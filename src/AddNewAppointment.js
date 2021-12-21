import React, { Component } from 'react'
import { addAppointment } from './actions'

class AddNewAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      day: '',
      time: '',
      patient: '',
      dentist: '',
      dentistId: '',
      assistant: '',
      assistantId: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addNewAppointment = (event) => {
    this.props.dispatcher(addAppointment(this.state))
    event.preventDefault()
  }

  render() {
    let days = []
    for (let i = 1; i <= 28; i++) {
      days.push(
        <option value={i} key={i}>
          {i}
        </option>
      )
    }

    let times = []
    for (let i = 7; i <= 19; i++) {
      times.push(
        <option value={i} key={i}>
          {i}
        </option>
      )
    }

    return (
      <div className='AddNewAppointment'>
        <h3> Add New Appointment </h3>
        <form onSubmit={this.addNewAppointment}>
          <select name='day' onChange={this.handleChange} required>
            <option value=''>Choose day</option>
            {days}
          </select>
          <select name='time' onChange={this.handleChange} required>
            <option value=''>Choose time</option>
            {times}
          </select>
          <select name='patient' onChange={this.handleChange} required>
            <option value=''>Choose patient</option>
            {this.props.clients.map((client, index) => (
              <option value={client.name} key={index}>
                {client.name}
              </option>
            ))}
          </select>
          <select name='dentist' onChange={this.handleChange} required>
            <option value=''>Choose dentist</option>
            {this.props.dentists.map((dentist) => (
              <option value={dentist.name} key={dentist.id}>
                {dentist.name}
              </option>
            ))}
          </select>
          <select name='assistant' onChange={this.handleChange}>
            <option value=''>Choose assistant</option>
            {this.props.assistants.map((assistant) => (
              <option value={assistant.name} key={assistant.id}>
                {assistant.name}
              </option>
            ))}
          </select>

          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNewAppointment
