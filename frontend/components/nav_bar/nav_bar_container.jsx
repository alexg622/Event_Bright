import { connect } from 'react-redux';
import React from 'react';
import NavBar from './nav_bar.jsx';
import { signout } from '../../actions/session_actions.js';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  session: state.session
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
