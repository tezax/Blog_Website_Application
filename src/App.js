import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </Router>
  );
};

export default App;
