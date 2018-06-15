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
    e.preventDefault();
    this.props.closeModal();
  }

  update(field){
    if (Math.abs(parseInt(this.state.quantity)) !== parseInt(this.state.quantity)) {
      return e => {this.setState({[field]: "0"})}
    } else {
      return e => {this.setState({[field]: e.target.value})}
    }
  }

  render(){

    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="Login-form">
          <h1 className="purchase-ticket">Purchase Ticket</h1>
          <label>
            <input id="margin" type="number" value={this.state.quantity} onChange={this.update("quantity")}/>
          </label>
          <input id="margin" type="submit" value="Purchase Tickets" />
        </form>
      </div>
    )
  }
}

export default TicketsForm;
