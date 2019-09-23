import React from 'react'
import { StyleSheet, TextInput, View, Image, ScrollView, Text, KeyboardAvoidingView, TouchableHighlight, Platform } from 'react-native'

export default class App extends React.Component {
  onPress () {

  }

  render () {
    return (
      // <ScrollView style={{flex: 1, backgroundColor: '#2187c2'}} centerContent >
      <View style={styles.container}>
        {/* <View style={styles.loginBox}> */}
        <Image style={styles.loginIcon} source={require('./personLogin.png')} />
        <Text style={styles.loginText}>LOGIN</Text>
        <KeyboardAvoidingView behavior='padding' enabled keyboardVerticalOffset='50'>
          <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
          <TextInput style={styles.input} placeholder='Password' />
        </KeyboardAvoidingView>

        <TouchableHighlight
          style={styles.loginButton}
          onPress={this.onPress()}
        >
          <Text style={{ fontSize: 20, color: 'white' }}> Login </Text>
        </TouchableHighlight>

        {/* </View> */}

      </View>
      //  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2187c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // loginBox: {
  //   backgroundColor: '#2187c2',
  //   width: '70%',
  //   height: '80%',
  //   borderRadius: 20,
  // },
  loginIcon: {
    // alignSelf: 'center',
    width: 170,
    height: 170,
    borderRadius: 50
  },
  input: {
    // alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 3,
    width: 220,
    height: 40,
    marginTop: 7,
    paddingLeft: 20,
    paddingRight: 5,
    backgroundColor: 'white',
    borderColor: '#02497cde',
  },
  loginText: {
    // alignSelf: 'center',
    fontSize: 30,
    color: '#02497c',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  loginButton: {
    // alignSelf: 'center',
    padding: 20,
    backgroundColor: '#02497c',
    borderRadius: 30,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 60
  }
})
