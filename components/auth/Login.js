import React from 'react'
import { StyleSheet, TextInput, View, Image, Text, KeyboardAvoidingView, TouchableHighlight, AsyncStorage } from 'react-native'
import axios from 'axios'

export default class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
  }

  async saveKey (name, value) {
    try {
      await AsyncStorage.setItem(name, value)
    } catch (error) {
      console.log('Error saving data' + error)
    }
  }

  onPress () {
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        const id = response.data.data.profile.id
        this.saveKey('token', response.data.data.token)
        this.saveKey('id', id.toString())
        this.saveKey('email', this.state.email)
        this.saveKey('image', response.data.data.profile.avatar_url)
        this.saveKey('name', response.data.data.profile.name)

        this.props.navigation.navigate('ConversationList')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      // <ScrollView style={{flex: 1, backgroundColor: '#2187c2'}} centerContent >
      <KeyboardAvoidingView behavior='padding' enabled style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <View style={styles.loginBox}> */}
          <Image style={styles.loginIcon} source={require('../../photos/personLogin.png')} />
          <Text style={styles.loginText}>LOGIN</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            keyboardType='email-address'
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            textContentType='password'
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
          />

          <TouchableHighlight
            style={styles.loginButton}
            onPress={() => this.onPress()}
          >
            <Text style={{ fontSize: 20, color: 'white' }}> Login </Text>
          </TouchableHighlight>

          {/* </View> */}

        </View>
      </KeyboardAvoidingView>
      //  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2187c2',
    alignItems: 'center',
    justifyContent: 'center'
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
    borderColor: '#02497cde'
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
