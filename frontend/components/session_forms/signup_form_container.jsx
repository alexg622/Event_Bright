import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import signupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(signupForm)
