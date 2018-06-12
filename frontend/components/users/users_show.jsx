import React from 'react';

class UsersShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    return(
      <div>
        {this.props.event_tickets.length} 
      </div>
    )
  }
}

export default UsersShow;
