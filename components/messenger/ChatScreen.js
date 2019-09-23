import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import ContactImage from '../../photos/5337490ca1097befda8a3a81e0b77af4.jpg'
import ContactImage1 from '../../photos/1494085820_norbert-therapy-dog-cute.jpg'
import Conversation from './Conversation'

export default class ChatScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      conversationList: [
        {
          image: ContactImage,
          name: 'zahra',
          lastName: 'kabiri',
          time: '12:01',
          email: '@zahrakbri',
          preview: 'zahra: hi',
          unseen: '1'
        },
        {
          image: ContactImage1,
          name: 'melika',
          lastName: 'ranjbar',
          time: '05:10',
          email: '@melirj',
          preview: 'melika: hello',
          unseen: '6'
        }
      ]
    }
  }

  render () {
    return (
      <>
        <View style={styles.chatScreenHeader}>

        </View>
        <ScrollView style={styles.chatScreen}>
          {Object.values(this.state.conversationList).map((item, index) => {
            return (
              <Conversation
                key={index}
                image={item.image}
                name={item.name}
                lastName=''
                time={item.time}
                email={item.email}
                preview={item.preview}
                unseen={item.unseen}
              />
            )
          })}
          {/* <View style={{ height:100, backgroundColor:'black' }}><Text>salaaaaam</Text></View> */}

        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    backgroundColor: '#206493',
    // alignItems: 'center',
    // justifyContent: 'center'
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    //   width: 200
    alignContent: 'flex-start'
  },
  chatScreenHeader: {
    height: 70,
    backgroundColor: '#082646'
   
  }
})
