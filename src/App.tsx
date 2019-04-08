import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupsPage from "./views/GroupsPage";
import GroupPage from "./views/GroupPage";
import TaskPage from "./views/TaskPage";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEdit,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faEdit, faArrowLeft);
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={GroupsPage} />
          <Route path="/:groupName" exact component={GroupPage} />
          <Route path="/:groupName/:taskName/edit" component={TaskPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
