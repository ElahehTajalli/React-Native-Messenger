import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Modal, Label, Item, Input } from 'react-native'
import { Icon } from 'native-base'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false
    }
  }

  onPress () {
    this.props.navigation.navigate('ConversationList')
  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    return (
      <>
        <View style={styles.Header}>
          <TouchableHighlight onPress={() => this.onPress()}>
            <Icon name='arrow-back' style={styles.MenuIcon} />
          </TouchableHighlight>
          <View style={styles.contactProfile}>
            <Image style={styles.contactImage} source={{ uri: this.props.image }} />
            <View style={styles.contactProfileDetails}>
              <Text style={styles.nameStyle}>{this.props.firstName}{this.props.lasName}</Text>
              <Text style={styles.emailStyle}>{this.props.email}</Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true)
            }}
          >
            <Icon name='ios-menu' style={styles.MenuIcon} />
          </TouchableHighlight>
        </View>

        <Modal
          animationType='slide'
          transparent
          visible={this.state.modalVisible}
        >
          <View style={styles.profileModal}>
            <View style={styles.profileModalDetail}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
                style={styles.itemStyle}
              >
                <>
                  <Icon name='ios-call' style={styles.iconStyle} />
                  <Text style={styles.textStyle}>Call</Text>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
                style={styles.itemStyle}
              >
                <>
                  <Icon name='ios-person' style={styles.iconStyle} />
                  <Text style={styles.textStyle}>Profile</Text>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
                style={styles.itemStyle}
              >
                <>
                  <Icon name='ios-search' style={styles.iconStyle} />
                  <Text style={styles.textStyle}>Search</Text>
                </>
              </TouchableHighlight>
            </View>
          </View>

        </Modal>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Header: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
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
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30
  },
  contactProfile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 30
  },
  contactProfileDetails: {
    paddingLeft: 20
  },
  nameStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  emailStyle: {
    color: 'white'
  },
  profileModal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: 40,
    marginRight: 15
  },
  profileModalDetail: {
    width: 130,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-around',
    paddingLeft: 15
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold'
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconStyle: {
    fontSize: 25,
    paddingRight: 15
  }

})
