import React from 'react';

class UpdateEvent extends React.Component {
  constructor(props){
    super(props)
    if(this.props.event === undefined) {
      return null
    }
    this.state = {
      event: {
        title: this.props.event.title || "",
        img_url: this.props.event.img_url || "",
        start_time: this.props.event.start_time || "",
        end_time: this.props.event.end_time || "",
        address: this.props.event.address || "",
        city: this.props.event.city || "",
        zipcode: this.props.event.zipcode || "",
        price: this.props.event.price || "",
        details: this.props.event.details || "",
        category: 0
    }
  }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({["price"]: parseFloat(this.state.price.replace(",","."))})
    this.props.updateEvent(this.state).then(event => this.props.history.push(`/events/${event.id}`))
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchEvent(parseInt(this.props.match.params.id))
  }

  update(field){
    return e =>
      this.setState({[field]: e.target.value})
  }

  componentWillReceiveProps(nextProps){
    if (this.props.event === undefined) {
      return null
    }

    if (this.props.event.id !== nextProps.match.params.id){
      this.props.fetchEvent(parseInt(this.props.match.params.id))
    }
  }

  componentWillUnmount(){
    this.props.clearEventErrors();
  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

  render(){
    if (this.props.categories === undefined) {
      return null
    }
    if (this.props.event === undefined) {
      return null
    }
    return(
      <div className="form-div">
        <form className="New-event-form" onSubmit={this.handleSubmit}>
          <h1>Update Your Event!</h1>
          <h5 className="Login-form-erros">{this.renderErrors()}</h5>
          <label>
            <input placeholder="Title" type="text" value={this.state.event.title} onChange={this.update("title")}/>
          </label>
          <label>
            <input placeholder="Image" type="text" value={this.props.event.img_url} onChange={this.update("img_url")}/>
          </label>
          <label>
            <input placeholder="Start date and Time" type="datetime-local" value={this.props.event.start_time} onChange={this.update("start_time")}/>
          </label>
          <label>
            <input placeholder="End date and Time" type="datetime-local" value={this.props.event.end_time} onChange={this.update("end_time")}/>
          </label>
          <label>
            <input placeholder="Address" type="text" value={this.props.event.address} onChange={this.update("address")}/>
          </label>
          <label>
            <input placeholder="City" type="text" value={this.props.event.city} onChange={this.update("city")}/>
          </label>
          <label>
            <input placeholder="Zipcode" type="text" value={this.props.event.zipcode} onChange={this.update("zipcode")}/>
          </label>
          <label>
            <input placeholder="Price" type="text" value={this.props.event.price} onChange={this.update("price")}/>
          </label>
          <label>
            <textarea placeholder="Details" value={this.props.event.details} onChange={this.update("details")}/>
          </label>
          <label>Category
          <select id ="myList" value={this.props.event.category} onChange={this.update("category")} >
            {this.props.categories.map(category => <option key={category.id} value={category.id} >{category.name}</option>)}
          </select>
          </label>
          <input type="submit" value="Create Event!"/>
          <input type="submit" value="Update Event!"/>
        </form>
        <footer></footer>
      </div>
    )
  }
}

export default UpdateEvent;
