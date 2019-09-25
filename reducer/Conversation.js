const initial = {
  conversations: []
}

const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'GET_CONVERSATIONS':
      return {
        ...state,
        conversations: action.conversations
      }

    default:
      return state
  }
}

export default conversation
