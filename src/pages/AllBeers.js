import React, { Component } from 'react';
import axios from "axios";
import BeerTileSummary from '../Components/BeerTileSummary';



export default class AllBeers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beerDataFull: [],
      beerDataDisplay: []
    }
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BEER_API}/beers`)
    .then((beersFromApi) => {
      this.setState({
        beerDataFull: beersFromApi.data,
        beerDataDisplay: beersFromApi.data
      });
    })
    .catch(err => console.log('err' + err));
  }
  
  render() {
    return (
      <div>
        {this.state.beerDataDisplay.map((beer, index) => 
          <BeerTileSummary
            key={index.toString()}
            {...beer}
          />)}
      </div>
    )
  }
   
}