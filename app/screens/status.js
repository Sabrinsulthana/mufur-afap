import React from "react";
import { View,TouchableOpacity, Image} from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default class Home extends React.Component{
    static navigationOptions = {
    
      header:null
    };
   
    render(){
      return(
  <View style={{flex:1}}>
    <Card containerStyle={{padding: 0,borderRadius:12,backgroundColor:'transparent',borderColor:'#371777'}}>
    <Text style={{fontSize:20,color:'#000000',alignItems:'center',marginTop:10}}> My status</Text>
      <Image source={require('../images/3.jpg')} style={{height:600,width:450}}/>   
     </Card> 
 
    
    </View>
)};
}