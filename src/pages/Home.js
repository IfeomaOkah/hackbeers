import React, { Component } from 'react'
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
    <div>
      <Nav />
      <aside>
        <h1>Hack Beers</h1>
        <div className="home-links">
          <div className="link-home"><Link to="/allbeers">Beers</Link></div>
          <div className="link-home"><Link to="randombeer">Beer Lotto</Link></div>
          <div className="link-home"><Link to="/newbeer">Create Your Own Beer</Link></div>
        </div>
      </aside>

      <section className="home-section">

      </section>
    </div>  
    )
  }
}
