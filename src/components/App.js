import React, { Component } from 'react'
import Danmu from './Danmu.js'
import Danmu1 from './Danmu1.js'
import Danmu2 from './Danmu2.js'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      danmuList: [
        "aaaaaaaaaaa",
        "bbbbbbbbbbb",
        "ccccccccccc",
        "ddddddddddd",
        "eeeeeeeeeee",
        "fffffffffff",
        "ggggggggggg",
        "hhhhhhhhhhh",
        "iiiiiiiiiii",
        "jjjjjjjjjjj",
        "kkkkkkkkkkk",
        "lllllllllll",
        "mmmmmmmmmmm",
        "nnnnnnnnnnn",
        "ooooooooooo",
        "ppppppppppp",
        "qqqqqqqqqqq",
        "rrrrrrrrrrr",
        "sssssssssss",
        "ttttttttttt",
        "uuuuuuuuuuu",
        "vvvvvvvvvvv",
        "wwwwwwwwwww",
      ]
    }
  }

  render() {
    return (
      <div className="full-container">
        {/* <div className="danmu-container">
          <Danmu danmuList={this.state.danmuList} />
        </div> */}
        {/* <div className="danmu-container">
          <Danmu1 danmuList={this.state.danmuList} />
        </div> */}
        <div className="danmu-container">
          <Danmu2 danmuList={this.state.danmuList} />
        </div>
      </div >
    )
  }
}
