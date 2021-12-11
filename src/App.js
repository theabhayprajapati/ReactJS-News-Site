import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <News />
          <Routes>
            <Navbar pageSize={5} country="in" category="business" />
            <Route exact exact path="/business">
              <Navbar pageSize={5} country="in" category="business" />
            </Route>
            <Route exact path="/science">
              <Navbar pageSize={5} country="in" category="science" />
            </Route>
            <Route exact path="/entertainment">
              <Navbar pageSize={5} country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <Navbar pageSize={5} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <Navbar pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/sports">
              <Navbar pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/techology">
              <Navbar pageSize={5} country="in" category="techology" />
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
