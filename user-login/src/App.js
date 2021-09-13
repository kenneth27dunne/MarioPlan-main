import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import Dashboard from "./Components/dashboard/Dashboard";
import Navbar from "./Components/layout/Navbar";
import CreateProject from "./Components/projects/CreateProject";
import ProjectDetails from "./Components/projects/ProjectDetails";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/Create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
