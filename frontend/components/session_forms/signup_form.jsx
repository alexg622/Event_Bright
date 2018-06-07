import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.signup(this.state).then(success => this.props.history.push("/"))
  // }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(success => this.props.closeModal());
  }

  update(field){
    return e => {this.setState({[field]: e.target.value})}
  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Signup-form">
          <h1 className="lets-start">Lets Get Started</h1>
          <h5 className="Signup-form-erros">{this.renderErrors()}</h5>
          <label>
            <input type="text" placeholder="First Name" value={this.state.first_name} onChange={this.update("first_name")}/>
          </label>
          <label>
            <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={this.update("last_name")}/>
          </label>
          <label>
            <input type="email" placeholder="Email" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <input type="submit" value="Sign Up!"/>
        </form>
      </div>
    )
  }
}

export default SessionForm;
