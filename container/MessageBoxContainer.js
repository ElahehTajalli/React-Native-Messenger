import Messages from '../components/messenger/MessageBox'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  security: state.security,
  background: state.background,
  alt: state.alt,
  messages: state.messages
})

export default connect(mapStateToProps)(Messages)
