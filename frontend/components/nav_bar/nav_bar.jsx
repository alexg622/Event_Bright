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

  showLinks(){
    if (this.props.session.currentUser){
      return [
        <li key="logout"><button className="logout-button" onClick={this.signout}>SIGN OUT</button></li>,
        // <li key="my-events" className="my-events-li"><Link to="/">My Events</Link></li>,
        <li key="create-event" className="new-events-li"><Link to="/events/new">CREATE EVENT</Link></li>
      ]
    } else {
      return [
        <li key="signup" className="signup-li"><a onClick={() => this.props.openModal('signup')}>SIGN UP</a></li>,
        <li key="login" className="login-li"><a onClick={() => this.props.openModal('login')}>SIGN IN</a></li>
        // <li className="login-li" key="login"><Link to='/session/new'>Log In</Link></li>
      ];
    }
  }

  render(){
    return(
      <div className="nav-bar">
        <Link className="active" id="event-link" to="/">Eventbrite</Link>
        <div className="ul-div">
          <ul className="nav-bar-ul">
            <li key="browse events"><Link to="/">BROWSE EVENTS</Link></li>
            {this.showLinks()}
          </ul>
      </div>
      </div>
    )
  }
}

export default withRouter(NavBar);
