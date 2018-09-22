import React from 'react';
import {Link} from 'react-router-dom';
import Guest from './Guest';
import GuestAdder from './GuestAdder';

export default class GuestList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      guests: [],
    }

    this.addGuest = this.addGuest.bind(this);
  }

  addGuest (name) {
    const guestName = name || 'guest' + this.state.guests.length;
    this.setState(prevState => ({guests: [...prevState.guests, guestName]}));
  }

  render () {
    return (
      <div>

        <h1>Add Guests Below:</h1>
        {this.state.guests.map((guest, i) => <Guest key={i} guestName={guest} />)}
        <GuestAdder addGuest={this.addGuest} />
        <br />
        <Link to="/results">Submit</Link>
      </div>
    );
  }
}
