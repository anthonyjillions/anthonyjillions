import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Icon from '../Icon';
import styles from './styles.css';
export const fields = ['name', 'email', 'message'];

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const errorbg = 'rgb(215, 255, 142)';
    const {
      fields: { name, email, message },
      handleSubmit,
    } = this.props;
    return (<form onSubmit={handleSubmit} className={styles.contactForm}>
      <div>
        <input
          style={{
            background: name.touched && name.error ? errorbg : 'white',
          }}
          type="text"
          placeholder="name"
          {...name}
          autoComplete="off"
        />

      </div>
      <div>
        <input
          style={{
            background: email.touched && email.error ? errorbg : 'white',
          }}
          type="text"
          placeholder="email"
          {...email}
          autoComplete="off"
        />
      </div>
      <div>
        <textarea
          style={{
            background: message.touched && message.error ? errorbg : 'white',
          }}
          type="text"
          placeholder="message"
          {...message}
          spellCheck="off"
        />
      </div>


      <div className={styles.Submit}>
        <button type="submit" disabled={this.props.submitted}>
            {this.props.submitted ? <Icon name="send" /> : <Icon name="arrow-right" />}
        </button>
      </div>
    </form>
    );
  }
}

ContactForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'ContactForm',
  fields,
  validate,
  getFormState: (state, ReduxMountPoint) => state.get(ReduxMountPoint),
})(ContactForm);
