import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './components/auth/Login'
import ConversationListContainer from './container/ConversationListContainer'
import ChatScreenContainer from './container/ChatScreenContainer'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import conversation from './reducer/Conversation'
import logger from 'redux-logger'

const store = createStore(conversation, applyMiddleware(logger))

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  ConversationList: {
    screen: ConversationListContainer
  },
  ChatScreen: {
    screen: ChatScreenContainer
  }
}, {
  initialRouteName: 'ConversationList',
  defaultNavigationOptions: {
    header: null
  }
})

const AppContainer = createAppContainer(MainNavigator)
