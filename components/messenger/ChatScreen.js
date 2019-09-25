import React from 'react'
import { StyleSheet, TextInput, View, Image, ScrollView, Text, KeyboardAvoidingView, TouchableHighlight, Platform, AsyncStorage } from 'react-native'
import axios from 'axios'
import Header from '../messenger/Header'
import Footer from '../messenger/Footer'
import MessageBox from '../messenger/MessageBox'

export default class ChatScreen extends React.Component {
  render () {
    return (
      <>
        <Header />
        <MessageBox />
        <Footer />
      </>
    )
  }
}
