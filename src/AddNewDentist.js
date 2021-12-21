import React, { Component } from 'react'
import { addDentist } from './actions'

class AddNewDentist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      isSick: false,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  addNewDentist = (event) => {
    this.props.dispatcher(addDentist(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <div className='AddNewDentist'>
        <h3> Add New Dentist </h3>
        <form onSubmit={this.addNewDentist}>
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
            placeholder='dentist@email.nl'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddNewDentist
