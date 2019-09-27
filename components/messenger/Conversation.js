import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { View, Image, StyleSheet, Text, AsyncStorage, TouchableHighlight } from 'react-native'
import { getMessageList, getConversationId, getUsername, getContactProfile } from '../../action/Conversation'

export default class Conversation extends React.Component {
  constructor () {
    super()

    this.state = {
      token: ''
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
    this.props.dispatch(getConversationId(this.props.conversations[this.props.item].id))
    this.props.dispatch(getUsername(this.props.name, this.props.lastName, this.props.email, this.props.image))
    this.props.dispatch(getContactProfile(this.props.conversations[this.props.item].users[this.props.index]))

    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.conversations[this.props.item].id)
    fdata.append('size', 100)
    fdata.append('date', (new Date().getTime() / 1000).toFixed(0))

    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then((response) => {
        this.props.dispatch((getMessageList(response.data.data.messages)))
        this.props.navigation.navigate('ChatScreen')
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  render () {
    return (
      <TouchableHighlight style={styles.conversation} onPress={() => this.onPress()}>
        <>
          <Image source={{ uri: this.props.image }} alt='profileContact' style={styles.image} />

          <View style={styles.conversationDetailBox}>

            <View style={styles.nameAndDate}>
              {this.props.name === null || this.props.name === '' ? <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.email}</Text> : <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.name}</Text>}
              <Text>{moment(this.props.time).add({ h: 3, m: 30 }).format('LT')}</Text>
            </View>

            <View style={styles.previewAndUnseen}>
              <Text style={styles.preview}>{this.props.preview}</Text>
              {this.props.unseen !== 0 &&
                <Text style={styles.unseen}>{this.props.unseen}</Text>}
            </View>

          </View>
        </>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  conversation: {
    height: 85,
    padding: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  conversationDetailBox: {
    flex: 1,
    justifyContent: 'space-between'
  },
  nameAndDate: {
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  previewAndUnseen: {
    marginTop: 10,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  preview: {
    // width: 17,
    // fontSize: 12
  },
  unseen: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    paddingTop: 1
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 35
  }
})
