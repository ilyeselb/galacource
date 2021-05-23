import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import {  Link } from "react-router-dom";

const MainNav = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">

        <Link to={"/"}>
         <p style={{color:"white"}}>Home</p> 
       </Link>
      </Toolbar>
    </AppBar>
  );
};

export default  (MainNav);
