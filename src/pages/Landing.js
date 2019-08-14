import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';



export default class Landing extends Component {
  render() {
    return (
      <MainLayout>
        <div className="link-land"><Link to="/auth/login">Login</Link></div>
        <div className="link-land"><Link to="/auth/signup">Signup</Link></div>
      </MainLayout>
    
    )
  }
}
