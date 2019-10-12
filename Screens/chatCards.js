import React, { Component } from 'react';
import { Card, Header } from 'native-base';
import { Image, Text, View , TouchableOpacity} from 'react-native'


export default class Allchat extends React.Component {
  render() {
    console.log("alchat==========================>>>>>>>..", this.props.userdata)
    return (
      <View>
       <TouchableOpacity onPress={()=>this.props.path.navigate("Active",this.props)}>
          <Card  style={{ marginTop: 25, backgroundColor: 'white', borderRadius: 5, border: 'none' }}>
            <View style={{ flexDirection: 'row', display: 'flex' }}>
              <Image source={{ uri: this.props.image }} style={{ width: 60, height: 60, borderRadius: 100 }} />
              <Text style={{width: 190, marginTop: 20, marginLeft: 10 }}>{this.props.name}</Text>
              <Image
                style={{marginTop: 10, backgroundColor: 'white', width: 40, height: 40 }}
                source={require('./images/send.png')}
              />
            </View>
          </Card>
          </TouchableOpacity>
      </View>
      // <TabNav/>
    )
  }
}
