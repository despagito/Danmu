import React, { Component } from 'react'
import './App.css'


/*
finite mode, real danmu 
- doesn't cycle, show each danmu at certain time.
- just like bullet, shoot in each lane
- each lane has different speed
- once some bullet done traveling, it can go back in the queue to shoot again.
*/
export default class Danmu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="danmu-board">
        <Marquee />
        <input type="text" />
      </div >
    )
  }
}

class Marquee extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="marquee marquee2">
        ...............
      </div >
    )
  }
}