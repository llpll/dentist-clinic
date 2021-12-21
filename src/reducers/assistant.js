const assistant = (state = [], action) => {
  let assistant = action.payload
  switch (action.type) {
    case 'ADD':
      assistant = {
        ...assistant,
        id: parseInt(Math.random().toString().substr(2, 3)),
      }
      return [...state, assistant]

    // case 'DELETE':
    //   const newState = [...state]
    //   newState.splice(action.payload, 1)
    //   return newState

    default:
      return state
  }
}

export default assistant
