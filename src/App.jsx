import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const url= "https://api.tvmaze.com/search/shows?q=all"

function App() {
  const [names, setNames]=useState();
  const fetchInfo = async()=>{
    const response= await fetch(url);
    // console.log(response);
    const data= await response.json();
    // console.log(typeof(data));

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
         {names && <About data={names}/>}
        </Route>
        <Route exact path="/show/:id">
          {names && <Contact vals={names}/> }
        </Route>
      </Switch>
    </>
  );
}

export default App;
