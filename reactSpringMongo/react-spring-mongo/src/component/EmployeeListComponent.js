import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
// import UserService from "../services/EmployeeService";


export default function UserComponent() {
    const [users, setUsers]= useState([]);
    const history = useHistory()
     useEffect(()=>{
        EmployeeService.getUsers().then((response)=>{
            setUsers(response.data);
        },[])
    })
    
    const addEmployee=()=>{
        
        history.push("/add-employee");
        // this.props.history.push('/add-employee')
    }
    const viewEmployee=(id)=>{
        history.push(`/view-employee/${id}`);
    }

    const editEmployee=(id)=>{
        history.push(`/update-employee/${id}`)
    }
    const deleteEmployee=(id) =>{
        //restapi
        EmployeeService.deleteEmployee(id).then((res)=>{
            const newUser = users.filter(user => user.id !== id)
            setUsers(newUser)
        })
    }
    return(
        <div>
            <h2 className = "text-center">Employee List</h2>
            
            <div>
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
            <table className= "table table-striped">
            <thead>
            <tr>
                <td colSpan='2'>User Id</td>
                <td colSpan='2'>User First Name</td>
                <td colSpan='2'>User Last Name</td>
                <td colSpan='2'>User Email Address</td>
                <td colSpan='2'>Actions</td>

                
            </tr>

            </thead>
                <tbody>
                    {
                        users.map(
                            user=>
                            <tr key= {user.id}>
                                <td colSpan='2'>{user.id}</td>
                                <td colSpan='2'>{user.firstName}</td>
                                <td colSpan='2'>{user.lastName}</td>
                                <td colSpan='2'>{user.emailId}</td>
                                <td>
                                    <button onClick = {() => editEmployee(user.id)} className ="btn btn-info">Update</button>
                                    <button style={{marginLeft:"10px"}} onClick = {() => deleteEmployee(user.id)} className ="btn btn-danger">Delete</button>
                                    <button style={{marginLeft:"10px"}} onClick = {() => viewEmployee(user.id)} className ="btn btn-info">View</button>

                                </td>

                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}