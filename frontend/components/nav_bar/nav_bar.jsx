import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.signout = this.signout.bind(this)
  }

  signout(e){
    e.preventDefault();
    this.props.signout().then(success => this.props.history.push("/"))
  }

  showSignout(){
    if (this.props.session.currentUser){
      return <button onClick={this.signout}>Log Out</button>
    } else {
      return (
        <div>
          <Link to="/users/new">Sign Up</Link>
         <Link to="/session/new">Log In</Link>
        </div>
      )
    }
  }


  render(){
    return(
      <div className="nav-bar">
        <Link to="/">Events</Link>
        {this.showSignout()}
      </div>
    )
  }
}

export default withRouter(NavBar);
