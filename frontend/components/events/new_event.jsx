import React from 'react';

class NewEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.event
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({["price"]: parseFloat(this.state.price.replace(",","."))})
    this.props.createEvent(this.state).then(event => this.props.history.push(`/events/${event.id}`))
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render(){
    return(
      <form className="New-event-form" onSubmit={this.handleSubmit}>
        <label>Title
          <input type="text" value={this.state.title} onChange={this.update("title")}/>
        </label>
        <label>Image
          <input type="text" value={this.state.img_url} onChange={this.update("img_url")}/>
        </label>
        <label>Start Time
          <input type="datetime-local" value={this.state.start_time} onChange={this.update("start_time")}/>
        </label>
        <label>End Time
          <input type="datetime-local" value={this.state.end_time} onChange={this.update("end_time")}/>
        </label>
        <label>Address
          <input type="text" value={this.state.address} onChange={this.update("address")}/>
        </label>
        <label>City
          <input type="text" value={this.state.city} onChange={this.update("city")}/>
        </label>
        <label>Zipcode
          <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")}/>
        </label>
        <label>Price
          <input type="text" value={this.state.price} onChange={this.update("price")}/>
        </label>
        <label>Details
          <textarea value={this.state.details} onChange={this.update("details")}/>
        </label>
        <input type="submit" value="Create Event!"/>
      </form>
    )
  }
}

export default NewEvent;
