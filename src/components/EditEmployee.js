import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export const EditEmployee =(route) =>{
    
    const history =useHistory();
    const {employees ,editEmployees} =useContext(GlobalContext);
    const [selectedUser , setSelectedUser]=useState({id:null, name:"",address:"", desiginstion:""});

    const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

   const handleChange =(key, value) =>{
        setSelectedUser({...selectedUser, [key]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        editEmployees(selectedUser);
        history.push("/");
    }

    if(!selectedUser || !selectedUser.id){
        return(
            <div>Invalid UserId</div>
        )
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <ul>
          
            <li>
                <label>User Name</label><br/>
                 <input type="text" name="name"  value={selectedUser.name}  onChange={(e)=> handleChange("name", e.target.value)}></input>
            </li>

            <li>
                <label>Address</label><br/>
                <input type="text" name="address" value={selectedUser.address}  onChange={(e)=> handleChange("address", e.target.value)}></input>
            </li>
            <li>
                <label>Desigination </label><br/>
                <input type="text" name="desigination" value={selectedUser.desigination} onChange={(e)=> handleChange("desigination", e.target.value)}></input>
            </li>
            <li>
              <button className="primary" type="submit">Submit</button>
            </li>
            <li>
                <Link to="/">cancle</Link>
            </li>
        </ul>
           
   </form>
        
   </> )
}