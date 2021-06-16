import axios from 'axios'

const EMPLOYEE_REST_AP_URL='http://localhost:8093/api/v2/employees/';

class EmployeeService{
    getUsers() {
        return axios.get(EMPLOYEE_REST_AP_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_AP_URL, employee);
    }
    getEmployeeById(employeeId){
        return  axios.get(EMPLOYEE_REST_AP_URL + '/' + employeeId)
    }

    updateEmployee(employee,employeeId){
        return  axios.put(EMPLOYEE_REST_AP_URL + '/' + employeeId,employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_AP_URL+'/'+employeeId)
    }
}

export default new EmployeeService();
