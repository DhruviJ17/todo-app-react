import './App.css';
import React from 'react';
import Todos from "./components/Todo/Todos";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ApiFunc from "./components/File_mgnt/Api";
import FileForm from "./components/File_mgnt/File";
import Logout from "./components/Auth/Logout";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/todo" exact component={Todos}/>
        <Route path="/apilist" component={ApiFunc}/>
        <Route path="/fileform" component={FileForm}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/logout" component={Logout}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
