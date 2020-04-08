import React from "react";
import { MainWrapper } from "./style/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";

const App = () => {
    return (
        <Router>
            <MainWrapper>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/:id" component={BookPage} />
                </Switch>
            </MainWrapper>
        </Router>
    );
};

export default App;
