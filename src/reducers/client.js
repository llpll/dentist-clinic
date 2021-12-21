const client = (state = [], action) => {
  let client = action.payload
  switch (action.type) {
    case 'ADD_CLIENT':
      client = {
        ...client,
        id: parseInt(Math.random().toString().substr(2, 3)),
      }
      return [...state, client]

    default:
      return state
  }
}

export default client
