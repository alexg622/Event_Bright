import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
