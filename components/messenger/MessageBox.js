import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, AsyncStorage } from 'react-native'
import moment from 'moment'
import SenderMessages from './SenderMessages'
import ReceiverMessages from './ReceiverMessages'

export default class MessageBox extends Component {
  constructor () {
    super()
    this.state = {
      id: ''
    }
  }

  async componentDidMount () {
    try {
      const value = await AsyncStorage.getItem('id')
      this.setState({ id: value })
    } catch (error) {
      console.log('Error retrieving data' + error)
    }
  }

  render () {
    return (
      <ScrollView style={{ height: 480 }}>
        <View style={styles.MessageBox}>
          {
            this.props.messages.map((message, index) => {
              return (
                message.map((message, index) => {
                  if (message.sender.id === parseInt(this.state.id)) {
                    return (
                      <SenderMessages key={index} text={message.text} time={moment(message.date).add({ h: 3, m: 30 }).format('LT')} className='right-message' />
                    )
                  } else if (message.sender.id !== parseInt(this.state.id)) {
                    return (
                      <ReceiverMessages key={index} text={message.text} time={moment(message.date).add({ h: 3, m: 30 }).format('LT')} className='left-message' />
                    )
                  }
                })
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  MessageBox: {
    backgroundColor: '#c3d5dd',
    flex: 17,
    margin: 10
  }
})
