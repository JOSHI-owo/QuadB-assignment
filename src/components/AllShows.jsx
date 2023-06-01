import React, { useState } from "react";
// import Common from "./Common";
import Card from "./Card";

function Menu({data}) {

  const menu=data.map((item)=>{
      return(
        <div key={item.id} className="col-12 col-md-4 py-3">
            <Card id={item.id} val={item} />
        </div>
      )
    })
  return (
  <>
      <div className="container text-center my-3 py-3">
        <h1 className=" heading font-weight-light py-5">
          All Shows
        </h1>
        <div className="row my-4 pt-4">
          {menu}
        </div>
      </div>

    </>
  );
}

export default Menu;
