import ChatScreen from '../components/messenger/ChatScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  image: state.image,
  id: state.id
})

export default connect(mapStateToProps)(ChatScreen)
