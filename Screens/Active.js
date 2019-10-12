
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Header from './Header'
import { View ,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from './../Config/firebase'

export default class Active extends React.Component {
    state = {
        messages: [],
    }

    componentDidMount = async()=> {
        let allmessage = []
    
       let uid = this.props.navigation.state.params.uid
       let cuid = this.props.navigation.state.params.currentUser.uid
    
    console.log( "user" ,uid)
    console.log("chat",cuid)
    
       await firebase.firestore().collection(cuid).where("chateId" ,"==" , uid)
        .get()
        .then((data)=>{
            data.forEach(value=>{
                let result = value.data();
            
                result.createdAt = result.createdAt.toDate()
    
                console.log(result.createdAt)
                allmessage.push(result);
            })
        }) 
    
    
        await firebase.firestore().collection(uid).where("chateId" ,"==" , cuid)
        .get()
        .then((data)=>{
            data.forEach(value=>{
                let result = value.data();
                console.log("userrjknjkbjhjkbhb",result)
                result._id = 1,
                result.user._id = 2
                console.log(result.chat)
                result.createdAt = result.createdAt.toDate()
                allmessage.push(result);
             
            })
        }) 
        console.log(allmessage)
       await allmessage.sort(function(a, b){return b.createdAt - a.createdAt});
       console.log(allmessage)
        await this.setState({
          messages: allmessage
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
      chateId = this.props.navigation.state.params.uid
      sendId = this.props.navigation.state.params.currentUser.uid

messages[0].sendId = sendId
messages[0].chateId = chateId

firebase.firestore().collection(sendId).add(messages[0])


    }

    render() {
        return (
            <View style ={{flex: 1}}>
           <Header navigation={this.props.navigation.state.params}
                name={this.props.navigation.state.params.name}
                photo={this.props.navigation.state.params.image}
                path={this.props.navigation} /> 
            
             <KeyboardAvoidingView style={{flex: 3}} behavior="padding" enabled>
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
            </KeyboardAvoidingView>
            </View>
        
        )
    }
}