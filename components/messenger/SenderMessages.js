import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SenderMessages extends React.Component {
  render () {
    return (
      <View style={styles.rightMessage}>
        <Text style={{ color: 'white' }}>{this.props.text}</Text>
        <Text style={styles.time}>{this.props.time}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rightMessage: {
    backgroundColor: '#333',
    color: '#fff',
    alignSelf: 'flex-end',
    // boxShadow:1px 1px 2px 2px rgba(0,0,0,.5)
    padding: 5,
    marginBottom: 10,
    borderRadius: 5
  },
  time: {
    fontSize: 8,
    alignSelf: 'flex-end',
    marginTop: 5,
    color: 'white'
  }
})
