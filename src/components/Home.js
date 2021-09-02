import React from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";
export const Home =() => {
    return(
        <>
        
        <h2 style={{color:"red", marginLeft:"6rem", lineHeight:"5rem"}}> Crud App With Context API</h2>
          <div className="home-con">
              
              <div><Heading/></div>
              
          </div>
          <div><EmployeeList/></div>
        </>
    )
}