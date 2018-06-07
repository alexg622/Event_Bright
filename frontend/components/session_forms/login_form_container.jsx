import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signin } from '../../actions/session_actions';
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
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
