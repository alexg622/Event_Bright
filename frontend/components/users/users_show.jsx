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
        <h1>Working</h1>
      </div>
    )
  }
}

export default UsersShow;
