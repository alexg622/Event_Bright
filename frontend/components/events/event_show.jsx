import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
  }

componentDidMount(){
  this.props.fetchEvent(this.props.id)
}




  render(){

    return(
      <div>

        Testing
      </div>
    )
  }
}

export default withRouter(EventShow);
