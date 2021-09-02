import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
export const EmployeeList =() =>{
     const {employees, removeEmployee} =useContext(GlobalContext);

     return(
          <>
             {employees.length>0 ? (
                  <>
                  {
                       employees.map(
                            (user)=>{
                                 return(
                                      <div className="list" key={user.id}>
                                           <div>{user.id}</div>
                                           <div>{user.name}</div>
                                           <div>{user.address}</div>
                                           <div>{user.desigination}</div>
                                           <div><Link style={{color:"white"}} to={`/edit/${user.id}`}>Edit</Link></div>
                                           <div><button style={{padding:"3px 10px"}} onClick={()=> removeEmployee(user.id)}>Delete</button></div>
                                      </div>
                                 )
                            }
                       )
                  }
                  </>
             ):(<>
             
               <p>No Data</p>
             </>)}
          </>
     )
}