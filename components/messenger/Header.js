import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'native-base'


export default class Header extends Component {
  render () {
    return (
      <View style={styles.Header}>
        <Icon name='arrow-back' style={styles.MenuIcon} />
        <View>
          <Image style={styles.contactImage} source={require('../../photos/f57e00306f3183cc39fa919fec41418b.jpg')} />
        </View>
        <Icon name='ios-menu' style={styles.MenuIcon} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Header: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#082646',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  MenuIcon: {
    color: 'white'
  },
  contactImage: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 35
  }
})
