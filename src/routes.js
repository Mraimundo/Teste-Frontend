import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MapPage from "./pages/Map";
import Home from "./pages/Home";

const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact path="/"
          caseSensitive={false}
          element={< Home />} />
        <Route
          exact path="/map"
          caseSensitive={false}
          element={< MapPage />} />
      </Routes>
    </Router>
  );
};

export default PageRoute;