import React, { Component } from 'react'
import Danmu1 from './Danmu.js'
import Danmu2 from './Danmu1.js'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      danmuList: [
        "I'm at Sofa",
        "^_^",
        "😁 ",
        "_____________________",
        "🚀 🚀 🚀",
        "Great Danmu",
        "Great Danmu1",
        "Great Danmu2",
        "Great Danmu3",
        "Great Danmu4",
        "Great Danmu5",
        "Great Danmu6",
        "Great Danmu7",
        "Great Danmu8",
        "Great Danmu9",
        "Great Danmu10",
      ]
    }
  }

  render() {
    return (
      <div className="full-container">
        <div className="danmu-container">
          <Danmu1 danmuList={this.state.danmuList} />
        </div>
        <div className="danmu-container">
          <Danmu2 danmuList={this.state.danmuList} />
        </div>
      </div >
    )
  }
}
