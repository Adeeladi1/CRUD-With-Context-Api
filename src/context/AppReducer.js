export const Reducer =(state, action)=>{

        switch(action.type){
            case "ADD":
               

                return{
                      ...state,
                      employees:[...state.employees, action.payload]
                }
            case "EDIT":
                const updatedEmployee =action.payload;
                const newEmployeeList =state.employees.map(
                   employee => employee.id === updatedEmployee.id ? updatedEmployee :employee
                )
                return{
                    ...state,
                    employees:newEmployeeList
                }
            case "REMOVE":
                const newList =state.employees.filter(e=> e.id !== action.payload)
                return{
                    ...state,
                    employees:newList
                }
                default:
                    return state;
        }
}