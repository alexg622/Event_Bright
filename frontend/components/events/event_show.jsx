import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
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
    console.log();
    return(

      <div className="event-show-div">
        <section className="event-show-image">
          <img src={this.props.event.img_url} height="400" width="800"/>
        </section>
        <section className="event-info-section">
          <ul>
            <li><h3>Date</h3></li>
            <li>{this.props.event.start_time}-{this.props.event.end_time}</li>
            <li>{this.props.event.address + " " + this.props.event.city + " " + this.props.event.zipcode}</li>
            <li>{this.props.event.description}</li>
            <li>{this.props.event.price}</li>
            <li>{this.props.author.first_name}</li>
          </ul>
        </section>

      </div>
    )
  }
}

export default withRouter(EventShow);
