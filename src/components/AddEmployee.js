import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {Link,useHistory} from "react-router-dom";
export const AddEmployee =() => {
    const history =useHistory();
    

    const {addEmployees, employees} =useContext(GlobalContext);
    const [name, setName] =useState("");
    const [address, setAddress] =useState("");
    const [desigination, setDesigination] =useState("");
    
    
    const handleSubmit=(e)=>{
    
        e.preventDefault();
        const newEmployee={
            id:employees.length+1,
            name,
            address,
            desigination
        };
        addEmployees(newEmployee);
        history.push("/")
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
                      <ul>
                        
                          <li>
                              <label >User Name</label><br/>
                               <input type="text" name="name"  value={name}  onChange={(e)=> setName(e.target.value)}></input>
                          </li>

                          <li>
                              <label>Address</label><br/>
                              <input type="text" name="address" value={address}  onChange={(e)=> setAddress(e.target.value)}></input>
                          </li>
                          <li>
                              <label>Desigination </label><br/>
                              <input type="text" name="desigination" value={desigination} onChange={(e)=> setDesigination(e.target.value)}></input>
                          </li>
                          <li>
                            <button className="primary" type="submit">Submit</button>
                          </li>
                          <li>
                              <Link style={{color:"white"}} to="/">cancle</Link>
                          </li>
                      </ul>
                         
         </form>
        </>
    )
}