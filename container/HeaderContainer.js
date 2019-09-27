import { connect } from 'react-redux'
import Header from '../components/messenger/Header'

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  image: state.image,
  profile: state.profile
})

export default connect(mapStateToProps)(Header)
