import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Contact(props) {

    // let num ={id:useParams()};
    let num =useParams();
    // console.log(typeof(num));
    // console.log(num);
    // let id= parseInt( num);
    console.log(num.id);
    // console.log(typeof(id));
    let {vals}=props;

    // console.log(vals);

    // let list=vals.map(val=>val.id)

    // console.log(list);

    // let newval=list.filter(item=>item===id)

    // console.log(list[1]);
    // console.log(list[1]==val.id);



    let card= vals.filter((val) => val.id==num.id)[0];
    return (
       
        <div>
              <div className="card" style={{ width: "18rem" }}>
        <img src="...." alt="...." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title.
          </p>
          {/* <NavLink to={`/show/${out.id}`} className="btn btn-primary">
            GO
          </NavLink> */}
        </div>
      </div>
            
        </div>
    )
}

export default Contact
