import React, { Component } from "react";
import Modal from "react-modal";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";

import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/index";
import Resume from "./pages/resume-preview";
import Editor from "./pages/editor";
import CustomResume from "./pages/custom-resume";

import ResumeContext from "./ResumeContext";

import "./App.css";
require("dotenv").config();

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    h3: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(",")
    },
    h2: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(",")
    },
    h1: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(",")
    },
    button: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(","),
      fontWeight: 700,
      fontSize: "1.2rem"
    }
  }
});

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
      <MuiThemeProvider theme={theme}>
        <ResumeContext.Provider value={this.state}>
          <StripeProvider apiKey="pk_test_Ue9wMhhFh1OI0Cs7kZ1qQQSG">
            <Router>
              <div className="App">
                <ScrollToTop>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={routeProps => <Index {...routeProps} />}
                    />
                    <Route
                      path="/editor"
                      render={routeProps => (
                        <Editor
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
                    <Route component={CustomResume} />
                  </Switch>
                </ScrollToTop>
              </div>
            </Router>
          </StripeProvider>
        </ResumeContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
