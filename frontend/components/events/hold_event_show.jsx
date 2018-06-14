<div className="event-show-ul-div">
  <ul className="event-show-ul">
    <li className="date-li">{this.state.month[month]}</li>
    <li className="day-li">{day}</li>
  </ul>
  <ul className="event-title-ul">
    <li className="title-li">{this.props.event.title}</li>
    <li className="author-li">By {this.props.author.first_name + " " + this.props.author.last_name}</li>
  </ul>
  <ul className="event-price-ul">
    <li className="price-li"><h3>${this.props.event.price}</h3></li>
  </ul>
</div>
// ________________________
// </div>
// ___________________________________________
<div className="purchase-ticket-div">
  <section className="bookmark"><i className="far fa-bookmark fa-lg"></i></section>
  <input className="ticket-input" type="submit" value="Tickets"/>

</div>

<div>
  <div className="other-info-div">
    <div className="description-div">
      <h1>Description</h1>
      <p>{this.props.event.details}</p>
    </div>
    <div className="date-time-div">
      <div className="bottom-info-div">
        <h1>Date and Time</h1>
        <section className="date-section">{this.state.day[new Date(this.props.event.start_time).getDay()] + this.state.month[new Date(this.props.event.start_time).getMonth()]
            + (new Date(this.props.event.start_time).getDate()) + ", " + (new Date(this.props.event.start_time).getYear())}</section>
          <section className="time-section">{this.state.hour[new Date(this.props.event.start_time).getHours()] + (new Date(this.props.event.start_time).getMinutes())
        + this.state.counter[new Date(this.props.event.start_time).getHours()]}</section>
        <h1>Location</h1>
        <section className="address">{this.props.event.address}</section>
        <section className="city-state">{this.props.event.city + ", " + this.props.event.state + " " + this.props.event.zipcode}</section>
      </div>
    </div>
  </div>
  <h1>Tags</h1>
  <ul>
    {this.props.categories.map(category => <li key={category.id}>{category.name}</li>)}
  </ul>
  {this.deleteButton()}
</div>
