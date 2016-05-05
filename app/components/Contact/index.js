import React, { Component } from 'react';
import Icon from '../Icon';
import styles from './styles.css';
import ContactForm from 'components/ContactForm';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.showForm = true;
    this.state.submitted = false;
    this.state.message = null;
  }

  postMessage(fields) {
    this.setState({ submitted: true });
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
      this.setState({ message: j.message, showForm: false });
    });
  }

  render() {
    return (
      <div className={styles.Contact}>
        {this.state.showForm ?
          <ContactForm
            onSubmit={(fields) => this.postMessage(fields)}
            submitted={this.state.submitted}
          />
        :
          <div className={styles.emailAlert}>
            <div>
              {this.state.message}
            </div>
            <div onClick={() => this.setState({ showForm: true, submitted: false })}>
              <Icon name="circle" size="2x" />
            </div>
          </div>
        }

      </div>
    );
  }
}
