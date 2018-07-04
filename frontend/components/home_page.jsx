import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hour: {
        0: " 12:",
        1: " 1:",
        1: " 2:",
        3: " 3:",
        4: " 4:",
        5: " 5:",
        6: " 6:",
        7: " 7:",
        8: " 8:",
        9: " 9:",
        10: " 10:",
        11: " 11:",
        12: " 12:",
        13: " 1:",
        14: " 2:",
        15: " 3:",
        16: " 4:",
        17: " 5:",
        18: " 6:",
        19: " 7:",
        20: " 8:",
        21: " 9:",
        22: " 10:",
        23: " 11:",
        24: " 12:"
      },
      counter: {
        0: "PM",
        1: "AM",
        1: "AM",
        3: "AM",
        4: "AM",
        5: "AM",
        6: "AM",
        7: "AM",
        8: "AM",
        9: "AM",
        10: "AM",
        11: "AM",
        12: "PM",
        13: "PM",
        14: "PM",
        15: "PM",
        16: "PM",
        17: "PM",
        18: "PM",
        19: "PM",
        20: "PM",
        21: "PM",
        22: "PM",
        23: "PM",
        24: "PM"
      },
      month: {
        1: "JAN ",
        2: "FEB ",
        3: "MAR ",
        4: "APR ",
        5: "MAY ",
        6: "JUN ",
        7: "JUL ",
        8: "AUG ",
        9: "SEP ",
        10: "OCT ",
        11: "NOV ",
        12: "DEC "
      },
      day: {
        1: "MON, ",
        2: "TUE,  ",
        3: "WED, ",
        4: "THU, ",
        5: "FRI, ",
        6: "SAT, ",
        7: "SUN, "
      }
    }
    this.returnCategories = this.returnCategories.bind(this);
  }

  findCategory(){
    return ["#Music", "#Festival", "#Concert", "#Club", "#Dance", "#Explore", "#Bar"][Math.floor((Math.random() * 7) + 0)]
  }

  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchCategories()
  }

  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //     this.props.fetchEvents();
  //     this.props.fetchCategories();
  //   }
  // }

  returnCategories(event){
    if (event.category_ids === undefined) {
      return null
    } else {
    // debugger
      let arr = []
      event.category_ids.map(category_id => arr.push(<Link to={`/categories/${category_id}`} key={`div-${category_id}`} className="div-one">#{this.props.categories[category_id].name}</Link>))
      return arr
    }
  }

//  <div className="categories-iteration">
  //   {this.returnCategories(event)}
  // </div>


  render(){
    return (
      <div className="Events-index">
        <img className="Nav-bar-image" src="https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=510608b1165db1e48889a8a059dd5d1e&auto=format&fit=crop&w=1050&q=80" width="900px" height="400px"/>
        <div className="center">
          {this.props.events.map(event =>
            <Link to={`/events/${event.id}`} key={event.id}><div className="events-div" key={event.id}>
              <img className="event-image" src={event.img_url}/>
              <div className="Event-info-div">
                <section className="section-one">{this.state.day[Math.floor((Math.random() * 7) + 1)] + this.state.month[new Date(event.start_time).getMonth()]
                    + (new Date(event.start_time).getDate())
                    + this.state.hour[new Date(event.start_time).getHours()] + (new Date(event.start_time).getMinutes())
                  + this.state.counter[new Date(event.start_time).getHours()]}</section>
                <section className="section-two">{event.title}</section>
                <section className="section-three">{event.address + ", " + event.city}</section>
                <div className="Event-icons">

                  <div className="div-one">{this.findCategory()}</div>




                <div className="div-three"><i className="far fa-bookmark fa-lg"></i></div>
                </div>
              </div>
            </div></Link>
          )}
        </div>
      </div>
    )
  }
}

export default HomePage;
