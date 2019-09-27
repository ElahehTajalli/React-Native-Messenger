import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ReceiverMessages extends React.Component {
  render () {
    return (
      <View style={styles.leftMessage}>
        <Text>{this.props.text}</Text>
        <Text style={styles.time}>{this.props.time}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  leftMessage: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    // boxShadow:1px 1px 2px 2px rgba(0,0,0,.5)
    padding: 5,
    marginBottom: 10,
    borderRadius: 5
  },
  time: {
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 5
  }
})
