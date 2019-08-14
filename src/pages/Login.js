import React, { Component } from 'react'
import Auth from '../Utilities/Auth';
const auth = new Auth();

export default class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
       user: {
        username: "",
        password: "",
       }, 
        error: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin = (e)=> {
    e.preventDefault();
    console.log(this.state.user)
    auth.login(this.state.user.username, this.state.user.password)
        .then((response)=> {
            console.log(response)
            this.props.history.push("/home");
        })
        .catch((error)=> {
          console.log(error)
            this.setState({error: error});
        })
  } 
  handleFormLogin = (e)=> {
    let user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({ 
        // within the square brackets "[]" you can use dynamic keys
        user
    })
  }
  render() {

    return (
      <div>
        <div>
          <form onSubmit={this.handleLogin}>
            <input type="text" name="username" placeholder="enter your username" value={this.state.username} onChange={this.handleFormLogin}/>  
            <input type="text" name="password" placeholder="enter your password" value={this.state.password} onChange={this.handleFormLogin}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}