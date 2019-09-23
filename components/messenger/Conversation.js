import React from 'react'
// import axios from 'axios'
// import { getMessageList, getConversationId, getUsername, getContactProfile } from '../../action/Conversation'
// import moment from 'moment'
import { View, Image, StyleSheet, Text } from 'react-native'

export default class Conversation extends React.Component {
  constructor () {
    super()

    this.state = {
    //   token: window.localStorage.getItem('token')
    }
  }

  render () {
    return (
      <View style={styles.conversation}>
        <Image source={this.props.image} alt='profileContact' style={styles.image} />

        <View style={styles.conversationDetailBox}>

          <View style={styles.nameAndDate}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.name}</Text>
            <Text>{this.props.time}</Text>
          </View>

          <View style={styles.previewAndUnseen}>
            <Text style={styles.preview}>{this.props.preview}</Text>
            {this.props.unseen !== 0 &&
              <Text style={styles.unseen}>{this.props.unseen}</Text>}
          </View>

        </View>
      </View>
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
