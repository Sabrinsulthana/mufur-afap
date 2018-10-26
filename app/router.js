import React from "react";
import { Platform, StatusBar, Button} from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,StackNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import KeyPair from "./screens/KeyPair";
import FriendRef from "./screens/FriendRef";
import chat from "./screens/chat";
import status from "./screens/status";
import calls from "./screens/calls";
 
const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      header: null,
      animationEnabled: true,
      headerStyle
    } 
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  },
  KeyPair: {
    screen: KeyPair,
    navigationOptions: {
      title: "Key Pair",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  },
  FriendRef: {
    screen: FriendRef,
    navigationOptions: {
      title: "Friend Reference",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  },
  chat:{
     screen:chat,
     navigationOptions:{
       title:"chatstart",
       header:null,
       animationEnabled:true,
       headerStyle
     }
  },
  status:{
    screen:status,
    navigationOptions:{
      title:"sts",
      header:null,
      animationEnabled:true,
      headerStyle
    }
  },
calls:{
  screen:calls,
  navigationOptions:{
    title:"cal",
    header:null,
    animationEnabled:true,
    headerStyle
  }
},
});
  
export const SignedIn = createMaterialTopTabNavigator(
  {
   Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Chats",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={40} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Status",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={40} color={tintColor} />
        )
      }
    },
   
   KeyPair: {
    screen: KeyPair,
    navigationOptions: {
      title: "CALLS",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="calls" size={40} color={tintColor} />
      )
    }
  }
  },
  // 8d6cab,371777
  {  
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#371777'
       } 
      }
    },
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      },
      KeyPair: {
        screen: KeyPair
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
