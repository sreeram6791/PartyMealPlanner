import React from 'react';
import {Restrictions} from './Restrictions';
import {Preferences} from './Preferences';

export default class GuestAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(evt) {
    this.setState({nameInput: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const guestName = this.state.nameInput;
    this.props.addGuest(guestName);
    this.setState({nameInput: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Restrictions />
        <Preferences />
        <input type="submit" value="Add Guest" />
      </form>
    );
  }
}
