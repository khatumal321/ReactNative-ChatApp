import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

import {SwitchNav} from './Screens/ChatNavigation'
import { AppRegistry } from 'react-native';
export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <SwitchNav />
    );
  }
}


AppRegistry.registerComponent('App', () => App) 
