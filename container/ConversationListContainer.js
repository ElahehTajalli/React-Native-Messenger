import ConversationList from '../components/messenger/ConversationList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  conversations: state.conversations
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)
