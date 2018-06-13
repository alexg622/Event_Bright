import React from 'react';
import { withRouter } from 'react-router-dom';

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
    this.deleteButton = this.deleteButton.bind(this)
  }

componentDidMount(){
  this.props.fetchEvent(this.props.id)
}

// componentWillReceiveProps(nextProps){
//
//   if (this.props.event === undefined){
//     return null
//   }
//
//   if (this.props.event.id !== nextProps.match.params.id){
//     this.props.fetchEvent(nextProps.match.params.id)
//   }
// }

handleDelete(e){
  e.preventDefault();
  this.props.deleteEvent(this.props.event.id).then(r => this.props.history.push("/"))
}

deleteButton(){
  if (this.props.session.currentUser !== undefined && this.props.session !== undefined && parseInt(this.props.author.id) === parseInt(this.props.session.currentUser.id)) {
    return <button key="delete-button" onClick={this.handleDelete}>DELETE EVENT</button>
  }
}


  render(){
    if (this.props.event === undefined){
      return null
    }

    const month = new Date(this.props.event.start_time).getMonth()
    const day = new Date(this.props.event.start_time).getDay()
    return(
      <div className="main-div">
        <div className="event-show-div">
          <img src={this.props.event.img_url} height="400" width="600"/>
          <div className="event-show-ul-div">
            <ul className="event-show-ul">
              <li className="date-li">{this.state.month[month]}</li>
              <li className="day-li">{day}</li>
            </ul>
            <ul className="event-title-ul">
              <li className="title-li">{this.props.event.title}</li>
              <li className="author-li">By {this.props.author.first_name + " " + this.props.author.last_name}</li>
            </ul>
            <ul className="event-price-ul">
              <li className="price-li"><h3>${this.props.event.price}</h3></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="other-info-div">
            <div className="description-div">
              <h1>Description</h1>
              <p>{this.props.event.details}</p>
            </div>
            <div className="date-time-div">
              <h1>Date and Time</h1>
              <section className="date-section">{this.state.day[new Date(this.props.event.start_time).getDay()] + this.state.month[new Date(this.props.event.start_time).getMonth()]
                  + (new Date(this.props.event.start_time).getDate()) + ", " + (new Date(this.props.event.start_time).getYear())}</section>
                <section className="time-section">{this.state.hour[new Date(this.props.event.start_time).getHours()] + (new Date(this.props.event.start_time).getMinutes())
              + this.state.counter[new Date(this.props.event.start_time).getHours()]}</section>
          </div>
            <div className="location-div">
              <h1>Location</h1>
              <section className="address">{this.props.event.address}</section>
              <section className="city-state">{this.props.event.city + ", " + this.props.event.state + " " + this.props.event.zipcode}</section>
            </div>
          </div>
          <h1>Tags</h1>
          <ul>
            {this.props.categories.map(category => <li key={category.id}>{category.name}</li>)}
          </ul>
          {this.deleteButton()}
        </div>
        <a onClick={() => this.props.openModal('PurchaseTicket')}>Purchase Ticket</a>
      </div>
    )
  }
}

export default withRouter(EventShow);
