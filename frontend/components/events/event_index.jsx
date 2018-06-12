import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class EventIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    return (
      <div className="Events-index">
        <div className="center">
          {this.props.events.map(event =>
            <Link to={`/events/${event.id}`} activeClassName="active"><div className="events-div" key={event.id}>
              <img src={event.img_url} height="400" width="400"/>
              <div className="Event-info-div">
                <section className="section-one">{event.start_time}</section>
                <section className="section-two"><h1>{event.title}</h1></section>
                <section className="section-three">{event.address + " " + event.city}</section>
              </div>
            </div></Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndex);
