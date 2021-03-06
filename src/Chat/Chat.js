import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  getResponseMessage = (message) => {
    const responseMessage = answersData.find((answer) => answer.tags.includes(message));
    const inputMessage = {
      role: 'CUSTOMER',
      text: message,
    };
    const { messages } = this.state;
    if (responseMessage !== undefined) {
      this.setState({
        messages: messages.concat(inputMessage, responseMessage),
      });
    } else {
      this.setState({
        messages: messages.concat(inputMessage),
      });
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput sendClick={this.getResponseMessage} />
      </main>
    );
  }
}

export default Chat;
