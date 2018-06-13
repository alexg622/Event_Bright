import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
  }

  findCategory(){
    return ["#Music", "#Festival", "#Concert", "#Party", "#Festival #Music", "#Party #Concert", "#Party #Music"][Math.floor((Math.random() * 6) + 0)]
  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    return (
      <div className="Events-index">
        <img className="Nav-bar-image" src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae8584287da6fac5895bbe4fb80f9f5f&auto=format&fit=crop&w=1050&q=80" width="900px" height="400px"/>
        <div className="center">
          {this.props.events.map(event =>
            <div className="events-div" key={event.id}>
              <Link to={`/events/${event.id}`}><img className="event-image" src={event.img_url}/></Link>
              <div className="Event-info-div">
                <section className="section-one">{this.state.day[new Date(event.start_time).getDay()] + this.state.month[new Date(event.start_time).getMonth()]
                    + (new Date(event.start_time).getDate())
                    + this.state.hour[new Date(event.start_time).getHours()] + (new Date(event.start_time).getMinutes())
                  + this.state.counter[new Date(event.start_time).getHours()]}</section>
                <section className="section-two">{event.title}</section>
                <section className="section-three">{event.address + ", " + event.city}</section>
                <div className="Event-icons">
                  <div className="div-one">{this.findCategory()}</div>
                  <div className="div-three"><i className="far fa-bookmark 2x"></i></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HomePage;
