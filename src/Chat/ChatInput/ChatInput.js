import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
      buttonDisabled: false,
    };
  }

  handlerOnClick = () => {
    this.setState({
      buttonDisabled: true,
    });
    this.props.sendClick(this.state.inputMessage);
    this.setState({
      buttonDisabled: false,
      inputMessage: '',
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputMessage: event.target.value,
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.inputMessage} onChange={this.handleOnChange} />
        <button type="button" onClick={this.handlerOnClick} disabled={this.state.buttonDisabled}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
