import React from 'react';

class TicketsForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    console.log("testing");
    e.preventDefault();
    this.props.closeModal();
  }

  update(field){
    return e => {this.setState({[field]: e.target.value})}
  }

  render(){

    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="Login-form">
          <h1>Purchase Ticket</h1>
          <label>
            <input type="number" value={this.state.quantity} onChange={this.update("quantity")}/>
          </label>
          <input type="submit" value="Purchase Tickets" />
        </form>
      </div>
    )
  }
}

export default TicketsForm;
