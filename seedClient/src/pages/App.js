import React from "react";
import {Route, Switch } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import Places from "./Places";
import AddPlace from "./AddPlace";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";
import Register from "./Register";


function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/places" component={Places} />
        <Route path="/addplace" component={AddPlace} />
        <Route path="/user" component={UserPage} />
		<Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
}
export default App;