import React from "react";
import { Text, View ,Image,TouchableOpacity,ImageBackground} from "react-native";
import { Card } from "react-native-elements";
import { CardItem,Right,Icon } from "native-base";

export default class Home extends React.Component{
  static navigationOptions = {
  
    header:null
  };
 
  render(){
    return(
      <View >
         <ImageBackground source={require('../images/7.jpg')} style={{height:600,width:420}}>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("calls");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50,resizeMode:'cover'}}/>     
 
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> friend 1
    </Text>
    
    <Image source={require('../images/voice.png')} onPress={()=>this.props.navigation.navigate('calls')} style={{height:50,width:50,resizeMode:'cover',marginLeft:300,marginTop:-45}}/>  
    </TouchableOpacity>
    </Card>
     <Card containerStyle={{padding:0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("calls");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50}}/>   
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-30}}> friend 2</Text>
    <Image source={require('../images/video.png')} style={{height:50,width:50,resizeMode:'cover',marginLeft:300,marginTop:-45}}/>  
    </TouchableOpacity>
     </Card>
     <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("calls");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50,resizeMode:'cover'}}/>     
 
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> friend 3
    </Text>
    
    <Image source={require('../images/voice.png')} onPress={()=>this.props.navigation.navigate('calls')} style={{height:50,width:50,resizeMode:'cover',marginLeft:300,marginTop:-45}}/>  
    </TouchableOpacity>
    </Card>
    <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("calls");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50,resizeMode:'cover'}}/>     
 
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> friend 4
    </Text>
    
    <Image source={require('../images/video.png')} onPress={()=>this.props.navigation.navigate('calls')} style={{height:50,width:50,resizeMode:'cover',marginLeft:300,marginTop:-45}}/>  
    </TouchableOpacity>
    </Card>
    <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
     <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("calls");
        }}>

    <Image source={require('../images/avt.png')} style={{height:50,width:50,resizeMode:'cover'}}/>     
 
    <Text style={{fontSize:20,color:'#000000',marginLeft:60,marginTop:-35}}> friend 5
    </Text>
    
    <Image source={require('../images/voice.png')} onPress={()=>this.props.navigation.navigate('calls')} style={{height:50,width:50,resizeMode:'cover',marginLeft:300,marginTop:-45}}/>  
    </TouchableOpacity>
    </Card>
</ImageBackground>
    </View>
)};
}
 