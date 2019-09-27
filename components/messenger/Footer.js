import React, { Component } from 'react'
import { StyleSheet, TextInput, View, AsyncStorage } from 'react-native'
import { Icon } from 'native-base'
import { TouchableHighlight } from 'react-native-gesture-handler'
import axios from 'axios'

export default class Footer extends Component {
  constructor () {
    super()
    this.state = {
      token: '',
      text: ''
    }
  }

  async componentDidMount () {
    try {
      const value = await AsyncStorage.getItem('token')
      this.setState({ token: value })
    } catch (error) {
      console.log('Error retrieving data' + error)
    }
  }

  onPress () {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.id)
    fdata.append('text', this.state.text)

    axios.post('https://api.paywith.click/conversation/create/', fdata)
      .then((response) => {
        this.setState({ text: '' })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <View style={styles.Footer}>
        <Icon name='ios-attach' style={styles.attachIcon} />
        {/* <KeyboardAvoidingView behavior='padding' enabled style={{flex: 1}}> */}
        <TextInput
          style={styles.input}
          placeholder='Message...'
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        {/* </KeyboardAvoidingView> */}
        <TouchableHighlight onPress={() => this.onPress()}>
          <Icon name='ios-send' style={styles.sendIcon} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#082646',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  attachIcon: {
    color: 'white'
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: 260,
    height: 35,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10
  },
  sendIcon: {
    fontSize: 27,
    color: 'white'
  }
})
