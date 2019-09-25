import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Footer extends Component {
  render () {
    return (
      <View style={styles.Footer}>
        <Text>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#082646',
    flex: 2
  }
})
