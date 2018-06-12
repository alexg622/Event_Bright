import React from 'react';

class TicketsForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTicket(this.props.match.params.id).then(success => this.props.closeModal());
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ticket-form">
          <input type="submit" value="Purchase Ticket" />
        </form>
      </div>
    )
  }
}

export default TicketsForm;
