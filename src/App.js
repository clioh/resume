import React, { Component } from "react";
import Modal from "react-modal";

import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";

import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/index";
import Resume from "./pages/resume";
import ResumeContext from "./ResumeContext";

import "./App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-135192995-1");
}

Modal.setAppElement("#root");

class App extends Component {
  constructor(props) {
    super(props);
    initializeReactGA();

    this.state = { resume: null, themeColor: "#1e90ff", puppeteer: false };

    this.updateResumeJson = this.updateResumeJson.bind(this);
  }

  updateResumeJson(newJson, puppeteer = false, themeColor) {
    const { themeColor: oldThemeColor } = this.state;
    this.setState({
      resume: newJson,
      themeColor: themeColor ? themeColor : oldThemeColor,
      puppeteer
    });
  }

  render() {
    const { resume, themeColor } = this.state;
    return (
      <ResumeContext.Provider value={this.state}>
        <StripeProvider apiKey="pk_test_Ue9wMhhFh1OI0Cs7kZ1qQQSG">
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
                <Route
                  path="/resume"
                  render={routeProps => (
                    <Resume
                      {...routeProps}
                      handleColorChange={newColor =>
                        this.setState({
                          themeColor: newColor.hex
                        })
                      }
                      themeColor={themeColor}
                      resume={resume}
                    />
                  )}
                />
              </div>
            </ScrollToTop>
          </Router>
        </StripeProvider>
      </ResumeContext.Provider>
    );
  }
}

export default App;
