
export const conversations = (conversations) => ({
  type: 'GET_CONVERSATIONS',
  conversations: conversations
})

export const getConversationId = (id) => ({
  type: 'GET_CONVERSATION_ID',
  id: id
})
