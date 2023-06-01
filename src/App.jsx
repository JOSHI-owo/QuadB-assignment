import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React, { useState, useEffect } from "react";
import { Switch, Route} from "react-router";
import "./index.css";
import AllShows from "./components/AllShows";
import ShowPage from "./components/ShowPage";
import Navbar from "./components/Navbar";

// URL 
const url= "https://api.tvmaze.com/search/shows?q=all"

function App() {

  //for storing the fetched data
  const [names, setNames]=useState();
  
  //function for fetching the data from the API

  const fetchInfo = async()=>{

    const response= await fetch(url);
    
    const data= await response.json();

    let val=data.map(dat=> dat.show)
    console.log(val);
    setNames(val)
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" >
         {names && <AllShows data={names}/>}
        </Route>
        <Route exact path="/show/:id">
          {names && <ShowPage vals={names}/> }
        </Route>
      </Switch>
    </>
  );
}

export default App;
