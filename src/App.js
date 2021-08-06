import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddUser from "./components/ValidationAndAddUser/AddUser";
import AllUser from "./components/ValidationAndAddUser/UserList/AllUser/AllUser";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <header className="App-header">
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/addUser">
             <AddUser/>
            </PrivateRoute>
            <PrivateRoute path="/allUser">
              <AllUser />
            </PrivateRoute>
            {/* <Route exact path="/">
              <Login />
            </Route> */}
            <PrivateRoute exact path="/">
              <AddUser />
            </PrivateRoute>
          </Switch>
      </Router>
     </UserContext.Provider>
    </header>
    </div>
  );
}

export default App;
