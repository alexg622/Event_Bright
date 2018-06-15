import React from 'react';

class UpdateEvent extends React.Component {
  constructor(props){
    super(props)
    if(this.props.event === undefined) {
      return null
    }
    this.state = this.props.event
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
      this.props.fetchCategories();
      this.props.fetchEvent(this.props.match.params.id)
    }

  handleSubmit(e){
    e.preventDefault();
    // this.setState({["price"]: parseFloat(this.state.event.price.replace(",","."))})
    this.props.updateEvent(this.state).then(payload => this.props.history.push(`/events/${Object.keys(payload.event)[0]}`))
    // this.props.updateEvent(this.state).then(event => console.warn(event))
  }


  update(field){
    return e =>
      this.setState({[field]: e.target.value})
  }
  //
  // componentWillReceiveProps(nextProps){
  //   if (this.props.event === undefined) {
  //     return null
  //   }
  //
  //   if (this.props.event.id !== nextProps.match.params.id){
  //     this.props.fetchEvent(parseInt(this.props.match.params.id))
  //   }
  // }

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
            <input placeholder="Title" type="text" value={this.state.title} onChange={this.update("title")}/>
          </label>
          <label>
            <input placeholder="Image" type="text" value={this.state.img_url} onChange={this.update("img_url")}/>
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
            <select id ="myList" value={this.props.categories.id} onClick={this.update("category")}>
              {this.props.categories.map(category => <option key={category.id} value={category.id} >Select Category - {category.name}</option>)}
            </select>
          </label>
          <input type="submit" value="Update Event!"/>
        </form>
        <footer></footer>
      </div>
    )
  }
}

export default UpdateEvent;
