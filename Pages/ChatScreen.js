// @flow
import React, {Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {ImageBackground,Image,Alert,  StyleSheet} from 'react-native';


import Fire from './Fire';

type Props = {
  name?: string,
};
class ChatScreen extends Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    console.log(this.props.mekan);
  }

  get user() {
    return {
      name: "USER221",
      _id: Fire.uid,
    };
  }

  render() {
     const title = ' Bir şeyler yaz  ';
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
        accessibilityLabel="Gönder"

        //style={styles.giftedStyle}
        placeholder= {title}
        isAnimated={true}
        />

    );
  }

  componentDidMount() {
    Fire.on(message => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }));
    },
    this.props.mekan
    );
  }
  componentWillUnmount() {
    Fire.off();
  }
}
const nickname = console.log('murattt');

const styles = StyleSheet.create({
  giftedStyle:{
    paddingBottom:70,
    margin:40
    },

});

export default ChatScreen;
