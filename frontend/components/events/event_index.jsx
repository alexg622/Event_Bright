import React from 'react';

class EventIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    return (
      <div className="Events-index">
        <ul className="Events-ul">
          {this.props.events.map(event => <li className="events-li" key={event.id}><img src={event.img_url} height="400" width="400"/></li>)}
        </ul>
      </div>
    )
  }
}

export default EventIndex;
