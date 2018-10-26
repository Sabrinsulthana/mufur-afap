import React from "react";
import { Text, View ,Image,TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import { ImageBackground } from 'react-native';
import { CardItem,Right,Icon, Container,Header, Left,Body,Title } from "native-base";

export default class Home extends React.Component{
  static navigationOptions = {
  
    header:null
  };
 
  render(){
    return(
      <Container>
        
      <View >
      <ImageBackground source={require('../images/7.jpg')} style={{height:600,width:420}}>
  <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
  <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

     <Image source={require('../images/avt.png')} style={{height:50,width:50,resizeMode:'cover'}}/>   
     <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-33}}> friend1</Text>
    
     </TouchableOpacity>
     </Card> 
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend2</Text>
   </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend3</Text>
   
   </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend4</Text>
   </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend 5</Text>
   </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend 6</Text>
    <Right>
     <Icon name="menu" />
       </Right>
   </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend 7</Text>
   </TouchableOpacity>
     </Card>
    
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("chat");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend 8</Text>
   </TouchableOpacity>
     </Card>
    


    </ImageBackground>
</View>
</Container>
)};
}
 




