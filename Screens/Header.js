import React, { Component } from 'react';
import { Card, Header } from 'native-base';
import { Image, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from './../Config/firebase'
export default class AnatomyExample extends Component {
  logout =()=> {
    firebase.auth().signOut().then(()=> {
      this.props.path.navigate('Login')
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    })
  }
  render() {
    console.log("propsksdmdnjsdf", this.props.userdata)
    return (
      <Card style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 5, border: 'none' }}>
        <View style={{ flexDirection: 'row', display: 'flex' }}>
          <Image source={{ uri: this.props.photo }} style={{ width: 60, height: 60, borderRadius: 100 }} />
          <Text style={{width: 190, marginTop: 20, marginLeft: 10 }}>{this.props.name}</Text>
          <TouchableOpacity
          onPress={()=>this.logout()}
          >
            <Image
              style={{marginTop: 10, width: 40, height: 40 }}
              source={require('./images/logout.png')}
            />
          </TouchableOpacity>
        </View>
      </Card>

    );
  }
}