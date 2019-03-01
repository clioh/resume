import React, { Component } from "react";

import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/index";
import Resume from "./pages/resume";
import ResumeContext from "./ResumeContext";

import "./App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-135192995-1");
  ReactGA.pageview("/");
}

class App extends Component {
  constructor(props) {
    super(props);
    initializeReactGA();

    this.state = { resume: null, puppeteer: false };

    this.updateResumeJson = this.updateResumeJson.bind(this);
  }

  updateResumeJson(newJson, puppeteer = false) {
    this.setState({
      resume: newJson,
      puppeteer
    });
  }

  render() {
    const { resume } = this.state;
    return (
      <ResumeContext.Provider value={this.state}>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Route
                exact
                path="/"
                render={routeProps => (
                  <Index
                    {...routeProps}
                    updateResumeJson={this.updateResumeJson}
                    resume={resume}
                  />
                )}
              />
              <Route path="/resume" component={Resume} />
            </div>
          </ScrollToTop>
        </Router>
      </ResumeContext.Provider>
    );
  }
}

export default App;
