import React from "react";
import { View,TouchableOpacity, Image,ImageBackground} from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { Container } from "native-base";

export default class Profile extends React.Component{
  static navigationOptions = {
  
    header:null
  };
 
  render(){
    return(
  <View>
  <ImageBackground source={require('../images/7.jpg')} style={{height:700,width:420}}>
    <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
  <TouchableOpacity onPress={() => {
           this.props.navigation.navigate("status");
    }}>
  <Image source={require('../images/video.png')} style={{height:50,width:50, resizeMode:'cover'}}/> 
  </TouchableOpacity>
     </Card> 
     </ImageBackground>
    </View>
   
)};
}
