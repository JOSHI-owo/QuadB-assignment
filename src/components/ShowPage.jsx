import React from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ShowPage(props) {

    // let num ={id:useParams()};
    let num =useParams();
    let {vals}=props;

    let card= vals.filter((val) => val.id==num.id)[0];
    return (
       
      <div className="container py-5 my-3 markdown page">
      <div className="d-flex justify-content-center">
        <img src={card.image.original} alt={card.name} style={{height:"36rem", width:"46rem"}}/>
      </div>
      <h1 className="font-weight-light text-center my-5">{card.name}</h1>
      <p>Language: <strong>{card.language}</strong></p>
      <p>Duration: <strong>{card.runtime}</strong></p>
      <p className='excerpt'>{card.summary}</p>
      <p>Link: <Link exact to={"https://www.tvmaze.com/shows/34653/all-american"}>https://www.tvmaze.com/shows/34653/all-american</Link>
      </p>
    </div>
          
    )
}

export default ShowPage;
