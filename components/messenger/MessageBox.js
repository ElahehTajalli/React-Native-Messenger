import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class MessageBox extends Component {
  render () {
    return (
      <View style={styles.MessageBox}>
        <Text>Message Box</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MessageBox: {
    backgroundColor: '#c3d5dd',
    flex: 17
  }
})
