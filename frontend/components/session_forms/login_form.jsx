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

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.signin(this.state).then(success => this.props.history.push("/"))
  // }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.signin(user).then(success => this.props.closeModal())
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
      <div className="login-form">
        <h1 className="Login-form-erros">{this.renderErrors()}</h1>
        <form action="/action_page.php" onSubmit={this.handleSubmit} className="Login-form">
          <label>Email
            <input type="email" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default LoginForm;
