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
    fetch('/api/contact', {
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
      this.setState({ showForm: false });
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
          <div className={styles.emailAlert}>
            {this.state.message}
          </div>
        }
      </div>
    );
  }
}
