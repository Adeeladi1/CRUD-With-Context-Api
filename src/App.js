import { Home } from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { EditEmployee } from "./components/EditEmployee";
import './App.css';

export const App =() =>{
  return(
    <>
    <GlobalProvider>
      <Switch>
        <div className="container">
        <div><Route exact path="/" component={Home}/></div> 
        <div><Route  path="/add" component={AddEmployee}/></div> 
       <div><Route exact path="/edit/:id" component={EditEmployee}/></div> 
       </div>
      </Switch>
    </GlobalProvider>
    </>
  )
    
}