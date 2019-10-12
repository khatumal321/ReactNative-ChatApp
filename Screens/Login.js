import React from 'react';
import * as Facebook from 'expo-facebook';
import { StyleSheet, Text, Button, View, Alert, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from './../Config/firebase'

export default class Login extends React.Component {
  constructor() {
    super()
  }

  logIn = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync('2424831034261370');
      if (type === 'success' && token) {
        var credential = await firebase.auth.FacebookAuthProvider.credential(token);
        await firebase.auth().signInAndRetrieveDataWithCredential(credential)
          .then((result) => {
            console.log("Result==>", result.user);
            let userData = {
              name: result.user.displayName,
              photoURL: result.user.photoURL,
              // uid : result.user.uid
            }
            console.log("=====>>userData", userData)

            firebase.firestore().collection('chatappUser').doc(result.user.uid).set({ name: result.user.displayName, photoURL: result.user.photoURL, uid: result.user.uid })
              .then((response) => {
                console.log(response)
                console.log("hdsofiksdjfjn", userData)
                this.props.navigation.navigate('Main', userData)
              }).catch((error) => {
                console.log(error)
              })

          })
          .catch((err) => {
            console.log('Error==>', err)
          })

      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Main');

      }
      else {
        this.props.navigation.navigate('Login')
      }

    });
  }

  static navigationOptions = {
    header: null
  }
  render() {

    return (
      <ImageBackground source={require('./images/images.jpg')} 
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%' }}>
          <Text style={{ fontSize: 25, fontStyle: 'italic', margin: 15, justifyContent: 'center' }}>Welcome</Text>
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 100 }}
              source={require('./images/download.png')}
            />
          </View>
          <View style={{ width: '75%' }}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.logIn}
            >
              Login with Facebook
        </Icon.Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
});