import { connect } from 'react-redux';
import React from 'react';
import NavBar from './nav_bar.jsx';
import { signout } from '../../actions/session_actions.js'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  session: state.session
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
