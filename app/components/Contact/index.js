import React, { Component } from 'react';
import styles from './styles.css';
import ContactForm from 'components/ContactForm';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.showForm = true;
    this.state.message = null;
  }

  postMessage(fields) {
    this.setState({ showForm: false });
    fetch('https://fathomless-dusk-45210.herokuapp.com/contact', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        message: fields.message,
      }),
    }).then((res) => res.json())
    .then((j) => {
      this.setState({ message: j.message });
    });
  }

  render() {
    return (
      <div className={styles.Contact}>
        {this.state.showForm ?
          <ContactForm
            onSubmit={(fields) => this.postMessage(fields)}
          />
        :
          <div className={styles.emailAlert} onTouchStart={() => this.setState({ showForm: true })}>
            {this.state.message ? this.state.message : 'loading'}
          </div>
        }
      </div>
    );
  }
}
