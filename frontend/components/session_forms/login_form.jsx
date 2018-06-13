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
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
  }

  componentWillUnmount(){
    this.props.clearSessionErrors();
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, {email: "demoUser@demo.com", password: "demoUser"})
    this.props.signin(user).then(success => this.props.closeModal());
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
        <form action="/action_page.php" onSubmit={this.handleSubmit} className="Login-form">
          <h1>Lets Get Started</h1>
          <h5 className="Login-form-erros">{this.renderErrors()}</h5>
          <label>
            <input type="email" placeholder="email" value={this.state.email} onChange={this.update("email")}/>
          </label>
          <label>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.update("password")}/>
          </label>
          <input type="submit" value={this.props.formType}/>
          <input type="submit" value="Demo Login" onClick={this.handleDemoSubmit}/>
        </form>
      </div>
    )
  }
}

export default LoginForm;
