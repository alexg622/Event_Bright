import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signin, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "login"
})

const mapDispatchToProps = dispatch => {
  return {
    signin: user => dispatch(signin(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
