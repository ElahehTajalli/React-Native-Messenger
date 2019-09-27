
export const conversations = (conversations) => ({
  type: 'GET_CONVERSATIONS',
  conversations: conversations
})

export const getConversationId = (id) => ({
  type: 'GET_CONVERSATION_ID',
  id: id
})

export const getUsername = (firstName, lastName, email, image) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  firstName: firstName,
  lastName: lastName,
  email: email,
  image: image
})

export const getContactProfile = (profile) => ({
  type: 'GET_CONTACT_PROFILE',
  profile: profile
})

export const getMessageList = (messages) => ({
  type: 'GET_MESSAGE_LIST',
  messages: messages
})
