import React from 'react'
import { NavLink } from 'react-router-dom';

function Card({val}) {
  console.log(val.image.medium)
    return (
      <div className="card card-shadow  mx-1" style={{ width: "22rem", margin:"20px 15px"}}>
        <img src={val.image.medium} alt="...." className="card-img-top img-fluid " style={{height:"20rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text">
            {val.genres[0]}
          </p>
          <NavLink to={`/show/${val.id}`} className="btn btn-primary">
            GO
          </NavLink>
        </div>
      </div>
    );
}

export default Card
