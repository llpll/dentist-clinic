const dentist = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DENTIST':
      let dentist = action.payload
      dentist = {
        ...dentist,
        id: state.length + 1,
      }
      return [...state, dentist]
    case 'MAKE_DENTIST_SICK':
      let newState = JSON.parse(JSON.stringify(state))
      newState[action.payload].isSick = true
      return newState

    default:
      return state
  }
}

export default dentist
