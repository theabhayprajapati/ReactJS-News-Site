import './App.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  a = 23
  b = 'Abhay'
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
