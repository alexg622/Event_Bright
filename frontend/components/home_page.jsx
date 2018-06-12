import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    return (
      <div className="Events-index">
        <img className="Nav-bar-image" src="http://www.baybridgeinn.com/assets/themes/baybridgeinn/img/Bay-Bridge-San-Francisco-Oakland.jpg" width="900px" height="400px"/>
        <div className="center">
          {this.props.events.map(event =>
            <div className="events-div" key={event.id}>
              <Link to={`/events/${event.id}`}><img src={event.img_url} height="400" width="400"/></Link>
              <div className="Event-info-div">
                <section className="section-one">{event.start_time}</section>
                <section className="section-two">{event.title}</section>
                <section className="section-three">{event.address + " " + event.city}</section>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HomePage;
