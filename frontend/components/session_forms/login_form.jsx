import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signin(this.state).then(success => this.props.history.push("/"))
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
        <h1 className="Login-form-erros">{this.renderErrors()}</h1>
        <h1>Welcome to EventBrite!</h1>
        <form onSubmit={this.handleSubmit} className="Login-form">
          <label>Email:
            <input type="email" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <button>Login!</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
