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
        <li><button onClick={this.signout}>Log Out</button></li>,
        <li className="my-events-li">My Events</li>
      ]
    } else {
      return [
        <li className="signup-li" key="signup"><Link to="/users/new">Sign Up</Link></li>,
        <li key="login"><Link to="/session/new">Log In</Link></li>
      ];
    }
  }


  render(){
    return(
      <div className="nav-bar">
      <ul className="nav-bar-ul">
        <li className="events-li"><Link className="event-link" to="/">EventBrite</Link></li>
        <li><Link to="/">Browse Events</Link></li>
        {this.showLinks()}
      </ul>
        <img className="Nav-bar-image" src="http://images1.fanpop.com/images/image_uploads/Golden-Gate-Bridge-san-francisco-1020074_1024_768.jpg" width="900px" height="400px"/>
      </div>
    )
  }
}

export default withRouter(NavBar);
