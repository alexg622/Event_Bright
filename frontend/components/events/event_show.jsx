import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
    this.state =   {
      hour: {
        0: " 12:",
        1: " 1:",
        1: " 2:",
        3: " 3:",
        4: " 4:",
        5: " 5:",
        6: " 6:",
        7: " 7:",
        8: " 8:",
        9: " 9:",
        10: " 10:",
        11: " 11:",
        12: " 12:",
        13: " 1:",
        14: " 2:",
        15: " 3:",
        16: " 4:",
        17: " 5:",
        18: " 6:",
        19: " 7:",
        20: " 8:",
        21: " 9:",
        22: " 10:",
        23: " 11:",
        24: " 12:"
      },
      counter: {
        0: "PM",
        1: "AM",
        1: "AM",
        3: "AM",
        4: "AM",
        5: "AM",
        6: "AM",
        7: "AM",
        8: "AM",
        9: "AM",
        10: "AM",
        11: "AM",
        12: "PM",
        13: "PM",
        14: "PM",
        15: "PM",
        16: "PM",
        17: "PM",
        18: "PM",
        19: "PM",
        20: "PM",
        21: "PM",
        22: "PM",
        23: "PM",
        24: "PM"
      },
      month: {
        1: "JAN ",
        2: "FEB ",
        3: "MAR ",
        4: "APR ",
        5: "MAY ",
        6: "JUN ",
        7: "JUL ",
        8: "AUG ",
        9: "SEP ",
        10: "OCT ",
        11: "NOV ",
        12: "DEC "
      },
      day: {
        1: "MON, ",
        2: "TUE,  ",
        3: "WED, ",
        4: "THU, ",
        5: "FRI, ",
        6: "SAT, ",
        7: "SUN, "
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.buttons = this.buttons.bind(this)
  }

componentDidMount(){
  this.props.fetchEvent(this.props.id)
}

componentWillReceiveProps(nextProps){
  if (this.props.currentUser !== nextProps.currentUser) {
    this.props.fetchEvent(this.props.id)
  }
  if (this.props.id !== nextProps.id) {
    this.props.fetchEvent(nextProps.id)
  }
  if (this.props.author === undefined) {
    this.props.fetchEvent(nextProps.id)
  }

}

handleDelete(e){
  e.preventDefault();
  this.props.deleteEvent(this.props.event.id).then(r => this.props.history.push("/"))
}

buttons(event){
  if (this.props.currentUser !== undefined && this.props.currentUser.id == this.props.author.id) {
    return [
      <button className="delete-event" key="delete-button" onClick={this.handleDelete}>DELETE EVENT</button>,
      <Link to={`/events/${event.id}/edit`} className="update-event" key="update-link">UPDATE EVENT</Link>
     ]
  }
}

fetcheTheCategories(){
  this.props.fetchEvent(this.props.id)
}

  render(){
    if (this.props.event === undefined || this.props.author === undefined){
      return null
    }

    const month = new Date(this.props.event.start_time).getMonth()
    const day = new Date(this.props.event.start_time).getDay()
    return(
      <div className="event-show-page">
        <div className="event-show-background-image-container">
          <img src={this.props.event.img_url} className="event-show-background-image" />
        </div>
        <div className="event-show-popup">
          <div className="event-show-popup-header-container">
            <div className="event-show-image">
              <img src={this.props.event.img_url} className="event-show-img"/>
            </div>
              <div className='event-show-title-date'>
              <div className="event-show-mon">{this.state.month[new Date(this.props.event.start_time).getMonth()]}</div>
              <div className="event-show-date">{(new Date(this.props.event.start_time).getDate())}</div>
              <div className='event-show-title'>{this.props.event.title}</div>
              <div className="event-show-author">by {this.props.author.first_name + " " + this.props.author.last_name}</div>
              <div className="price-div">
                <div className='price'>$20 - ${this.props.event.price}</div>
            </div>
            </div>
          </div>
            <div className="show-divider">
              <section className="bookmark"><i className="far fa-bookmark fa-lg"></i></section>
              <a className="ticket-input" onClick={() => this.props.openModal('PurchaseTicket')}>Tickets</a>
            </div>

            <div className='event-details'>
              <div className='event-show-description'>
                <div className='event-description-header'>DESCRIPTION</div>
                <div className='event-description'>{this.props.event.details}</div>
                <br/>
                <br/>
                <br/>
                <div className='event-description-header'>TAGS</div>
                <br/>
                <br/>
                <div className="tags">
                  {this.props.categories.map(category => <Link className="tag-name" key={category.id} to={`/categories/${category.id}`}>{category.name}</Link>)}
                </div>
                </div>
              <div className='event-location-time'>
                <div className='event-show-logistic-header'>Date and Time</div>
                <div className='event-show-start-time'>{"Mon, June 18 2018"}</div>
                <div className='event-show-start-time'>{"6:00 PM-2:00 AM PDT"}</div>
                <a href="https://accounts.google.com/signin/v2/identifier?service=cl&passive=1209600&osid=1&continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&followup=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&scc=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className='add-calendar' target="_blank">Add to Calendar</a>
                <div className="event-show-logistic-header">LOCATION</div>
                <div className='event-show-location'>{this.props.event.address}</div>
                <div className='event-show-location'>{this.props.event.city + ", " + this.props.event.state + " " + this.props.event.zipcode}</div>
                <a href="https://www.google.com/maps/@37.7997191,-122.4156722,15z" className='view-map' target="_blank">View Map</a>
              </div>
            </div>
            {this.buttons(this.props.event)}
          </div>

  </div>
    )
  }
}

export default withRouter(EventShow);
