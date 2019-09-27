import React from 'react'
import { View, AsyncStorage } from 'react-native'
import axios from 'axios'
import HeaderContainer from '../../container/HeaderContainer'
import FooterContainer from '../../container/FooterContainer'
import MessageBoxContainer from '../../container/MessageBoxContainer'

export default class ChatScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      interval: ''
    }
  }

  async componentDidMount () {
    try {
      const value = await AsyncStorage.getItem('token')
      const interval = setInterval(() => {
        const fdata = new FormData()
        fdata.append('token', value)
        fdata.append('conversation_id', this.props.id)
        axios.post('https://api.paywith.click/conversation/seen/', fdata)
          .then((response) => {
          })
          .catch(function (error) {
            console.log(error)
          })
      }, 3000)
      this.setState({ interval })
    } catch (error) {
      console.log('Error retrieving data' + error)
    }
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#c3d5dd' }}>
        <HeaderContainer
          navigation={this.props.navigation}
        />
        <MessageBoxContainer />
        <FooterContainer />
      </View>
    )
  }
}
