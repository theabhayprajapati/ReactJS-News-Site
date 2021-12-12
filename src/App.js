import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class App extends Component {
  pageSize = 9
  apikey = 'e3553a68781d448b87d4ebd624b4b888'
  // apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="red"
            progress={this.state.progress}
            // progress={80}

            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            {}
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="business"
                pageSize={this.pageSize}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="science"
                pageSize={this.pageSize}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="entertainment"
                pageSize={this.pageSize}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="general"
                pageSize={this.pageSize}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="health"
                pageSize={this.pageSize}
                country="us"
                category="health"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="sports"
                pageSize={this.pageSize}
                country="us"
                category="sports"
              />
            </Route>
            <Route exact path="/techology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apikey}
                key="technology"
                pageSize={this.pageSize}
                country="us"
                category="techology"
              />
            </Route>
          </Routes>
          <News
            setProgress={this.setProgress}
            apiKey={this.apikey}
            key="general"
            pageSize={this.pageSize}
            country="us"
            category="general"
          />
        </Router>
      </div>
    )
  }
}
