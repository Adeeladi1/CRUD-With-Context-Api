import { createContext, useReducer } from "react";
import { Reducer } from "./AppReducer";
const initialState ={
    employees:[
        {
        id:1,
        name:"adi",
        address:"Uk",
        desigination:"shark"
        }
       
    ]
}
    
export const GlobalContext =createContext(initialState);

export const GlobalProvider =({children}) =>{
    const [state, dispatch] =useReducer(Reducer, initialState)

    const addEmployees=(employee)=>{
      
        dispatch(
            {
                type:"ADD",
                payload:employee
            }
        )
    }

    const editEmployees =(employee)=>{
         dispatch(
             {
                 type:"EDIT",
                 payload:employee
             }
         )
    }

    const removeEmployee =(id) =>{
          dispatch(
              {
                  type:"REMOVE",
                  payload:id
              }
          )
    }
    return(
        <GlobalContext.Provider value={{
           employees:state.employees,
            addEmployees,
            editEmployees,
            removeEmployee
         }}>
          {children}
        </GlobalContext.Provider>
    )
}