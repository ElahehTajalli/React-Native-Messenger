const initial = {
  time: '',
  firstName: '',
  lastName: '',
  image: '',
  security: false,
  background: require('../photos/wooden-table-product-background_53876-90059.jpg'),
  alt: 'backGround',
  conversations: [],
  messages: [],
  profile: '',
  id: ''
}

const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'GET_CONVERSATIONS':
      return {
        ...state,
        conversations: action.conversations
      }
    case 'GET_CONVERSATION_ID' :
      return {
        ...state,
        id: action.id
      }
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        image: action.image
      }
    case 'GET_CONTACT_PROFILE' :
      return {
        ...state,
        profile: action.profile
      }
    case 'GET_MESSAGE_LIST' :
      return {
        ...state,
        messages: [action.messages]
      }

    default:
      return state
  }
}

export default conversation
