import React from "react";
import { View,TouchableOpacity, Image,ImageBackground} from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";

export default class Profile extends React.Component{
  static navigationOptions = {
  
    header:null
  };
 
  render(){
    return(
  <View>
    <ImageBackground source={require('../images/5.jpg')} style={{height:600,width:420}}>
    <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
  <TouchableOpacity onPress={() => {
           this.props.navigation.navigate("status");
        }}>

     <Image source={require('../images/avt.png')} style={{height:50,width:50, resizeMode:'cover'}}/>   
     <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> My status</Text>
     </TouchableOpacity>
     </Card> 
 
     <Card containerStyle={{padding: 0,height:50,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate('status')
        }}>
      <Text style={{fontSize:20}}> Recent status</Text>
     

       </TouchableOpacity>
 </Card>
   <Card containerStyle={{padding: 0,height:50,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
      
   <TouchableOpacity onPress={() => {
        alert("Updated status");
        }}>
      <Text style={{fontSize:20}}>Viewed status</Text>
   
   </TouchableOpacity>
   
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("status");
        }}>
    <Image source={require('../images/3.jpg')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> 15mins ago</Text>
   </TouchableOpacity>
     </Card>
     </ImageBackground>
    </View>
)};
}
