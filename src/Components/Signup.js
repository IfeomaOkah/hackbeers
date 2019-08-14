import React, { Component } from 'react'
import Auth from "../Utilities/Auth";
const auth = new Auth();

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
     user: {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
     }, 
      error: null
  }

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}
handleFormSubmit = (e)=> {
  e.preventDefault();
  auth.signup(this.state.user)
      .then((response)=> {
          console.log(response)
          this.props.history.push("/home");
      })
      .catch((error)=> {
        console.error(error )
          this.setState({error: error});
      })
} 

handleFormChange = (e)=> {
  let user = {...this.state.user}
  user[e.target.name] = e.target.value
  this.setState({ 
      user
  })
}

render() {
      
  return (
    <div>  
      <div>
        <form onSubmit={this.handleFormSubmit}>             
           <input type="text" name="firstname" placeholder="enter your first name" value={this.state.firstName} onChange={this.handleFormChange} />    <input type="text" name="lastname" placeholder="enter your last name" value={this.state.lastName} onChange={this.handleFormChange}/> 
           <input type="text" name="email" placeholder="enter your email" value={this.state.email} onChange={this.handleFormChange}/> 
           <input type="text" name="username" placeholder="enter your username" value={this.state.username} onChange={this.handleFormChange}/>  
           <input type="text" name="password" placeholder="enter your password" value={this.state.password} onChange={this.handleFormChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
  </div> 
    )
  }
}