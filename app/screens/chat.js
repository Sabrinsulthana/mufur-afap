import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; 
import "prop-types"; // 15.6.2

export default class chat extends Component {
  static navigationOptions = {
  
    header:null
  };
 
  constructor(props) {
    super(props);
    this.state = {
      form:'sabrin',
      to:'user',
      content: '',
      visiblity: 1,
      messages: []
    };
  }


  componentWillMount() {
    this.setState({ messages:  [
      {
        _id: Math.round(Math.random() * 1000000),

        text: 'good',

        createdAt: new Date(),

        user: {

          _id: 2,

          name: 'React Native',

        },

        sent: true,

        received: true

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'fine',

        createdAt: new Date(),

        user: {

          _id: 1,

          name: 'React Native',

        },

        sent: true,

        received: true

      },
       {

        _id: Math.round(Math.random() * 1000000),

        text: 'how are you',

        createdAt: new Date(),

        user: {

          _id: 2,

          name: 'React Native',

        },

        sent: true,

        received: true

      },
       {

        _id: Math.round(Math.random() * 1000000),

        text: 'hi',

        createdAt: new Date(),

        user: {

          _id: 1,

          name: 'React Native',

        },

        sent: true,

        received: true

      },






    ]});

  }

  onSend(messages = []) {

    this.setState((previousState) => ({

      messages: GiftedChat.append(previousState.messages, messages),
      

    }));

  }

  render() {

    return (

      <GiftedChat

       messages={this.state.messages}

       onSend={(messages) => {this.onSend(messages); this.sendMessage(messages[0].text)}}
       

       user={{

         _id: 1,

       }}

     />

    );

  }
}
