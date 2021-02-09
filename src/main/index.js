
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../component/home";
import  FormikEntryPoint  from "../component/FormikEntryPoint";
const Main = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/formik-tutorial" component={FormikEntryPoint} />
      </Switch>
    </main>
  );
  export default Main;
