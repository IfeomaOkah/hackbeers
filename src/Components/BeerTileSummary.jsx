import React from 'react';

const BeerTileSummary = (props) => {
  return (
    <div>
      <img src={props.image_url} alt={props.name}/>
      {props.name}
    </div>
  )
}

export default BeerTileSummary;
