import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/channel/:channelId">
              <h1>CHAT SCREEN</h1>
              {/* <Chat /> */}
            </Route>
            <Route>
              <h1>Hello world</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
