import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      1: "JAN",
      2: "FEB",
      3: "MAR",
      4: "APR",
      5: "MAY",
      6: "JUN",
      7: "JUL",
      8: "AUG",
      9: "SEP",
      10: "OCT",
      11: "NOV",
      12: "DEC"
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteButton = this.deleteButton.bind(this)
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
          <div className="div-for-ul">
            <ul className="event-show-ul">
              <li className="date-li">{this.state[month]}</li>
              <li className="day-li">{day}</li>
              <li className="title-li">{this.props.event.title}</li>
              <li className="author-li">By {this.props.author.first_name + " " + this.props.author.last_name}</li>
              <li className="price-li"><h3>${this.props.event.price}</h3></li>
            </ul>
          </div>
        </div>
        <div className="other-info-div">
          {this.props.event.address + " " + this.props.event.city + " " + this.props.event.zipcode}
          {this.props.event.description}
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
