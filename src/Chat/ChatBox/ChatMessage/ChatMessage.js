import React, { Component } from 'react';
import ROLE from '../../../constants';
import './ChatMessage.scss';

class ChatMessage extends Component {
  render() {
    const { role, text } = this.props;
    const boxStyle = {
      backgroundColor: role === ROLE.ROBOT ? '#dfe4ea' : '#70a1ff',
    };
    const messageStyle = {
      justifyContent: role === ROLE.ROBOT ? 'flex-start' : 'flex-end',
    };
    return (
      <div className="ChatMessage" style={messageStyle}>
        {role === ROLE.ROBOT && <div className="robot-avatar" />}
        <div style={boxStyle} className="message-box">
          {text}
        </div>
        {role === ROLE.CUSTOMER && <div className="customer-avatar" />}
      </div>
    );
  }
}

export default ChatMessage;
