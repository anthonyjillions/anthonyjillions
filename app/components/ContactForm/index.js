import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import styles from './styles.css';
export const fields = ['name', 'email', 'message'];

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      fields: { name, email, message },
      handleSubmit,
      submitting,
    } = this.props;
    return (<form onSubmit={handleSubmit} className={styles.contactForm}>
      <div>
        <input type="text" placeholder="name" {...name} autoComplete="off" />
      </div>
      <div>
        <input type="email" placeholder="email" {...email} autoComplete="off" />
      </div>
      <div>
        <textarea type="text" placeholder="message" {...message} spellCheck="off" />
      </div>


      <div className={styles.Submit}>
        <button type="submit" disabled={submitting}>
            {submitting ? <i /> : <i />} Send
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
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'ContactForm',
  fields,
  getFormState: (state, ReduxMountPoint) => state.get(ReduxMountPoint),
})(ContactForm);
