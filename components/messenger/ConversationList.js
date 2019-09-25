import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, TextInput, Modal, AsyncStorage } from 'react-native'
import { Icon, Item, Label } from 'native-base'
// import ContactImage from '../../photos/5337490ca1097befda8a3a81e0b77af4.jpg'
// import ContactImage1 from '../../photos/1494085820_norbert-therapy-dog-cute.jpg'
import ConversationContainer from '../../container/ConversationContainer'
import axios from 'axios'
import { conversations } from '../../action/Conversation'

export default class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false
    }
  }

  async componentDidMount () {
    try {
      const value = await AsyncStorage.getItem('token')
      axios.get('https://api.paywith.click/conversation/', {
        params: {
          token: value
        }
      })
        .then((response) => {
          // console.log(response.data.data.conversation_details)
          this.props.dispatch(conversations(response.data.data.conversation_details))
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log('Error retrieving data' + error)
    }
  }

  // async getKey () {
  //   try {
  //     const value = await AsyncStorage.getItem('token')
  //     console.log('getKey', value)
  //     return value
  //   } catch (error) {
  //     console.log("Error retrieving data" + error)
  //   }
  // }

  onPress () {
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    return (
      <>
        <View style={styles.conversationListHeader}>

          <Icon name='ios-menu' style={{ color: 'white' }} />

          <View style={styles.searchBox}>
            <Icon name='ios-search' style={{ fontSize: 20 }} />
            <TextInput placeholder='Search' />
            <Icon name='ios-people' />
          </View>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true)
            }}
          >
            <Icon name='ios-add' style={styles.addIcon} />
          </TouchableHighlight>

        </View>

        <ScrollView style={styles.conversationList}>
          {Object.values(this.props.conversations).map((item, index) => {
            let contactIndex = 0
            Object.values(item.users).map((item, index) => {
              if (item.id !== 222) {
                contactIndex = index
              }
            })
            return (
              <TouchableHighlight key={index} onPress={() => this.onPress()}>
                <ConversationContainer
                  key={index}
                  image={item.users[contactIndex].avatar_url}
                  name={item.users[contactIndex].name}
                  lastName=''
                  time={item.latest_message_date}
                  email={item.users[contactIndex].email}
                  preview={item.preview}
                  // unseen={item.unseen_messages[window.localStorage.getItem('id')]}
                  unseen='2'
                />
              </TouchableHighlight>
            )
          })}
        </ScrollView>

        <Modal
          animationType='slide'
          transparent
          visible={this.state.modalVisible}
        >
          <View style={styles.addModal}>
            <View style={styles.addModalDetail}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                <Icon name='ios-close' style={styles.closeIcon} />
              </TouchableHighlight>
              <Text style={styles.subjectModal}>Add Contact</Text>
              <Item floatingLabel style={{ borderBottomColor: 'black', width: 200 }}>
                <Label>Email</Label>
              </Item>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                <Text style={styles.addButton}>Add</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </>
    )
  }
}

const styles = StyleSheet.create({
  conversationList: {
    flex: 1,
    backgroundColor: '#206493',
    alignContent: 'flex-start'
  },
  conversationListHeader: {
    height: 70,
    backgroundColor: '#082646',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchBox: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#c3d5dd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    width: 260,
    borderRadius: 15
  },
  addIcon: {
    color: 'white',
    backgroundColor: '#206493',
    borderRadius: 17,
    overflow: 'hidden',
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3
  },
  addModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  addModalDetail: {
    width: 250,
    height: 300,
    backgroundColor: '#c3d5dd',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 25
  },
  subjectModal: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
    color: '#082646'
  },
  addButton: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#082646',
    fontSize: 20,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white'
  },
  closeIcon: {
    fontSize: 30,
    paddingLeft: 200,
    color: '#082646'
  }
})
