import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as burgerFunction from "./side-bar-utility";

import OldYoutubeForm  from './first-form'
import YoutubeForm  from './second-from'
import FormikContainer from './FormikContainer'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import EnrollmentForm from './EnrollmentForm'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


import "./styles-custom.css";
import "./base.css";
import "./bootstrap.min.css";


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

const routes = [
  {
    path: "/first-formik-tutorial",
    exact: true,
    sidebar: () => <></>,
    main: () => <OldYoutubeForm/>
  },
  {
    path: "/second-from",
    sidebar: () => <></>,
    main: () => <YoutubeForm />
  },
  {
    path: "/formik-container",
    sidebar: () => <></>,
    main: () => <ChakraProvider theme={theme}> <FormikContainer/></ChakraProvider>
  },
  {
    path: "/login-form",
    sidebar: () => <></>,
    main: () => <ChakraProvider theme={theme}> <LoginForm/></ChakraProvider>
  },
  {
    path: "/registration-from",
    sidebar: () => <></>,
    main: () => <ChakraProvider theme={theme}> <RegistrationForm/></ChakraProvider>
  },
  {
    path: "/enrollment-form",
    sidebar: () => <></>,
    main: () => <ChakraProvider theme={theme}> <EnrollmentForm/></ChakraProvider>
  },
  {
    path: "/practice",
    sidebar: () => <></>,
    main: () => <div>one</div>
  }
];

function FormikEntryPoint() {
  return (
    <Router>
      <div style={{ fontSize: "small" }}>
        <div
          className="w3-sidebar w3-bar-block w3-card w3-animate-left"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <button
            onClick={() => burgerFunction.w3_close()}
            className="w3-bar-item w3-button w3-large"
          >
            Close &times;
          </button>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/first-formik-tutorial" className="w3-bar-item w3-button">
                First FORM
              </Link>
            </li>
            <li>
              <Link to="/second-from" className="w3-bar-item w3-button">
               Second form
              </Link>
            </li>
            <li>
              <Link to="/formik-container" className="w3-bar-item w3-button">
                Formik Container
              </Link>
            </li>
            <li>
              <Link
                to="/login-form"
                className="w3-bar-item w3-button"
              >
                Login Form
              </Link>
            </li>
            <li>
              <Link to="/registration-from" className="w3-bar-item w3-button">
                Rgistration-From
              </Link>
            </li>

            <li>
              <Link
                to="/enrollment-form"
                className="w3-bar-item w3-button"
              >
                Enrollment-Form
              </Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div id="main">
          <div className="w3-teal">
            <button
              id="openNav"
              className="w3-button w3-teal w3-xlarge"
              onClick={() => burgerFunction.w3_open()}
            >
              ☰ <span>Formik 2.1.2</span>
            </button>
          </div>

          <div className="w3-container">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default FormikEntryPoint;
