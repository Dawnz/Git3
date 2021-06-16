import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import EmployeeListComponent from "./component/EmployeeListComponent";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './App.css';
import CreateEmployeeComponent from "./component/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./component/UpdateEmployeeComponent"
import ViewEmployeeComponent from "./component/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
          
              <HeaderComponent></HeaderComponent>
                  <div className="container">
                      <Switch>
                        <Route path="/" exact={true} component={EmployeeListComponent}></Route>
                        <Route path="/employees" component={EmployeeListComponent}></Route>
                        <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                        <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                        
                      </Switch>
                  </div>
              <FooterComponent></FooterComponent>
          
      </Router>
    </div>
  );
}

export default App;
