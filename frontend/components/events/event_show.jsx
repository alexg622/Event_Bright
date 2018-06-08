import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props)
  }

componentDidMount(){
  this.props.fetchEvent(this.props.id)
}

componentWillReceiveProps(nextProps){

  if (this.props.event === undefined){
    return null
  }

  if (this.props.event.id !== nextProps.match.params.id){
    this.props.fetchEvent(nextProps.match.params.id)
  }
}




  render(){
    console.log(this.props.id);
    console.log(this.props.event);
    if (this.props.event === undefined){
      return null
    }
    return(

      <div>
        {this.props.id}
        {this.props.event.title}
        Testing
      </div>
    )
  }
}

export default withRouter(EventShow);
