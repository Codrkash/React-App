import "./App.css";
// import a from "./Components/Navbar.js";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent key="general" pageSize={3} category="general" />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent key="health" pageSize={3} category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent key="health" pageSize={3} category="science" />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  key="business"
                  pageSize={3}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  key="technology"
                  pageSize={3}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent key="sports" pageSize={3} category="sports" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  key="entertainment"
                  pageSize={3}
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
