import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Chatcard from './chatCards'
import firebase from './../Config/firebase'
import Header from './Header'

export default class Allchat extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            userdata: '',

        }
    }
    componentDidMount() {
        let { users } = this.state
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('-----------------halye.....to....', user.uid)
                let userObj = {
                    name: user.providerData[0].displayName,
                    photo: user.providerData[0].photoURL,
                    uid: user.uid,
                }
                this.setState({ userdata: userObj })
                firebase.firestore().collection("chatappUser").get()
                    .then((data) => {
                        data.forEach((getData) => {
                            let usersData = getData.data();
                            if (usersData.uid !== user.uid) {
                                users.push(usersData);
                                this.setState({
                                    users: users
                                })
                            }
                            else {
                                this.setState({
                                    users: users
                                })
                            }
                        })
                    })
                    .catch((error) => {
                        console.log("=========>error", error)
                    })
            } else {
                console.log("logged out")
            }
        });
    }

    render() {
        console.log("allchat==========================>>>>>>>..", this.props.userdata)
        return (
            <View>
                <ScrollView>
                <Header navigation={this.props.navigation.state.params} name={this.state.userdata.name} photo={this.state.userdata.photo} path={this.props.navigation} />

                {
                    this.state.users.map((val, i) => {
                        return (
                                <Chatcard currentUser={this.state.userdata} path={this.props.navigation} uid={val.uid} name={val.name} image={val.photoURL} />
                                )
                            })
                        }
                        </ScrollView>
            </View>
        )
    }
}
