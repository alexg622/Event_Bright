import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }
  }

componentDidMount(){
  this.props.fetchEvent(this.props.id)
}

componentWillReceiveProps(nextProps){

  if (this.props.event === undefined){
    return null
  }

  if (this.props.event.id !== nextProps.match.params.id){
    this.props.fetchEvent(nextProps.match.params.id)
  }
}




  render(){
    if (this.props.event === undefined){
      return null
    }
    const month = new Date(this.props.event.start_time).getMonth()
    const day = new Date(this.props.event.start_time).getDay()
    return(
      <div>
        <div className="event-show-div">
          <section className="event-show-image">
            <img src={this.props.event.img_url} height="400" width="600"/>
          </section>
          <section className="event-info-section">
            <div className="div-for-ul">
              <ul className="event-show-ul">
                <li className="date-li">{this.state[month]}</li>
                <li className="day-li">{day}</li>
                <li className="title-li">{this.props.event.title}</li>
                <li className="author-li">By {this.props.author.first_name + " " + this.props.author.last_name}</li>
                <li className="price-li"><h3>${this.props.event.price}</h3></li>
              </ul>
            </div>
          </section>
        </div>
        {this.props.event.address + " " + this.props.event.city + " " + this.props.event.zipcode}
        {this.props.event.description}
      </div>
    )
  }
}

export default withRouter(EventShow);
