
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

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then(success => this.props.history.push("/"))
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
        <h1 className="Signup-form-erros">{this.renderErrors()}</h1>
        <h1>Welcome to EventBrite</h1>
        <form onSubmit={this.handleSubmit} className="Signup-form">
          <label>First Name:
            <input type="text" value={this.state.first_name} onChange={this.update("first_name")}/>
          </label>
          <label>Last Name:
            <input type="text" value={this.state.last_name} onChange={this.update("last_name")}/>
          </label>
          <label>Email:
            <input type="email" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <button>Sign up!</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
