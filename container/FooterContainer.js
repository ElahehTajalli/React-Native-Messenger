import { connect } from 'react-redux'
import Footer from '../components/messenger/Footer'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  id: state.id
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
