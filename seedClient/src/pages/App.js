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
import Features from "./Documentation";
import WhoDidWhat from "./WhoDidWhat";
import DownloadApp from "./DownloadApp";
import FutureImplementations from "./FutureImplementations";


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
                <Route path="/features" component={Features} />
                <Route path="/whodidwhat" component={WhoDidWhat} />
                <Route path="/downloadapp" component={DownloadApp} />
                <Route path="/futureimplementations" component={FutureImplementations} />
                </Switch>
            </div>
            );
}
export default App;