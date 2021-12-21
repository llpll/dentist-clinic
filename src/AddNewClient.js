import React, { Component } from 'react'
import { addClient } from './actions'

class AddNewClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      yearOfBirth: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  AddNewClient = (event) => {
    this.props.dispatcher(addClient(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <div className='AddNewClient'>
        <h3> Add New Client </h3>
        <form onSubmit={this.AddNewClient}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='phone'
            placeholder='0612345678'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='email'
            placeholder='client@email.nl'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='number'
            name='yearOfBirth'
            placeholder='1985'
            value={this.state.yearOfBirth}
            onChange={this.handleChange}
          />

          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNewClient
