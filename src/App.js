import React from "react";
import { MainWrapper } from "./style/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookPageContainer from "./components/BookPageContainer";

const App = () => {
  return (
    <Router>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={BookPageContainer} />
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
