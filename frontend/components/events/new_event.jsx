import React from 'react';

class NewEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.event
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    // this.setState({["price"]: parseFloat(this.state.price.replace(",","."))})
    this.props.createEvent(this.state).then(payload => this.props.history.push(`/events/${Object.keys(payload.event)[0]}`))
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  update(field){
    return e =>
      this.setState({[field]: e.target.value})
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
    return(
      <div className="form-div">
        <form className="New-event-form" onSubmit={this.handleSubmit}>
          <h1>Create Your Event!</h1>
          <h5 className="Login-form-erros">{this.renderErrors()}</h5>
          <label>
            <input placeholder="Title" type="text" value={this.state.title} onChange={this.update("title")}/>
          </label>
          <label>
            <input placeholder="Image Url" type="text" value={this.state.img_url} onChange={this.update("img_url")}/>
          </label>
          <label>
            <input placeholder="Start date and Time" type="datetime-local" value={this.state.start_time} onChange={this.update("start_time")}/>
          </label>
          <label>
            <input placeholder="End date and Time" type="datetime-local" value={this.state.end_time} onChange={this.update("end_time")}/>
          </label>
          <label>
            <input placeholder="Address" type="text" value={this.state.address} onChange={this.update("address")}/>
          </label>
          <label>
            <input placeholder="City" type="text" value={this.state.city} onChange={this.update("city")}/>
          </label>
          <label>
            <input placeholder="Zipcode" type="text" value={this.state.zipcode} onChange={this.update("zipcode")}/>
          </label>
          <label>
            <input placeholder="State" type="text" value={this.state.state} onChange={this.update("state")}/>
          </label>
          <label>
            <input placeholder="Price" type="text" value={this.state.price} onChange={this.update("price")}/>
          </label>
          <label>
            <textarea placeholder="Details" value={this.state.details} onChange={this.update("details")}/>
          </label>
          <label>
          <select id ="myList" value={this.state.category.id} onClick={this.update("category")}>
            {this.props.categories.map(category => <option key={category.id} value={category.id} >Select Category - {category.name}</option>)}
          </select>
          </label>
          <input type="submit" value="Create Event!"/>
        </form>
        <footer></footer>
      </div>
    )
  }
}

export default NewEvent;
