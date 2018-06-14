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
              <input className="ticket-input" type="submit" value="Tickets"/>
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
                  {this.props.categories.map(category => <div className="tag-name" key={category.id}>{category.name}</div>)}
                </div>
                </div>
              <div className='event-location-time'>
                <div className='event-show-logistic-header'>Date and Time</div>
                <div className='event-show-start-time'>{"Mon, June 18 2018"}</div>
                <div className='event-show-start-time'>{"6:00 PM-2:00 AM PDT"}</div>
                <div className='add-calendar'>Add to Calendar</div>
                <div className="event-show-logistic-header">LOCATION</div>
                <div className='event-show-location'>{this.props.event.address}</div>
                <div className='event-show-location'>{this.props.event.city + ", " + this.props.event.state + " " + this.props.event.zipcode}</div>
                <div className='view-map'>View Map</div>
              </div>
            </div>


        </div>


      </div>
    )
  }
}

export default withRouter(EventShow);
