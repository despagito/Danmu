import React, { Component } from 'react'
import './App.css'


export default class Danmu extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let boardHeight = 400
    let danmuLines = boardHeight / 50
    let eachLineNums = Math.ceil(this.props.danmuList.length / danmuLines)
    console.log(eachLineNums)
    let danmuList = JSON.parse(JSON.stringify(this.props.danmuList))
    let newDanmuList = []

    while (danmuList.length) {
      newDanmuList.push(danmuList.splice(0, eachLineNums))
    }

    let multiMarq = newDanmuList.map((entry, key) => {
      return (<Marquee danmuList={entry} key={key} />)
    })

    return (
      <div className="danmu-board" >
        {multiMarq}
      </div >
    )
  }
}


/*
marquee using css animation

bad
- hard to control
- hard to solve long danmu.if width:200%, then left:200% 
  - solution: 200% infinite and change content over time.
- blank during switch

good
- easy to infinite
*/

class Marquee extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let bg_choices = ['#7C9CE2', '#2C59BB', '#2c4785'] // '#CAD8F0',

    let domList = this.props.danmuList.map((entry, key) => {
      let random_bg = bg_choices[Math.floor(Math.random() * bg_choices.length)];
      let style = {
        background: random_bg
      }
      return (
        <li key={key} className="danmu-item" style={style}>{entry}</li>
      )
    })

    let style = {
      animationDuration: Math.floor(Math.random() * 20 + 20) + 's'
    }

    return (
      // <ul className="marquee marquee" style={{ animationDuration: `${this.state.speed}%` }}>
      <ul className="marquee marquee1" style={style}>
        {domList}
      </ul >
    )
  }
}




