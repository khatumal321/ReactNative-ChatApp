import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import Header from './Header'
import { TabNav } from './ChatNavigation'
import firebase from './../Config/firebase'


class MainScreen extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("usdjuhffffffffffffffffffffffui", user)

      if (user) {
        console.log("ksdmkv", user.providerData[0].displayName)

      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor: '#424242'}}>
        <TabNav />
      </View>
    )
  }
}

export default MainScreen


