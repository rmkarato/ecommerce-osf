import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/study" component={TeacherList} /> */}
    </BrowserRouter>
  );
}

export default Routes;