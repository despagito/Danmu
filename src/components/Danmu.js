import React, { Component } from 'react'
import './App.css'


export default class Danmu extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {

    let boardHeight = 400
    let danmuLines = boardHeight / 50
    let eachLineNums = this.props.danmuList.length / danmuLines
    let danmuList = JSON.parse(JSON.stringify(this.props.danmuList))
    let newDanmuList = []

    while (danmuList.length) {
      newDanmuList.push(danmuList.splice(0, eachLineNums))
    }

    let multiMarq = newDanmuList.map((entry, key) => {
      return (<Marquee1 danmuList={entry} key={key} />)
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
- if width:200%, then left:200% hard to solve long danmu
- solution: 200% infinite and change content over time.

good
- easy to infinite
*/

class Marquee1 extends Component {
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
      // <ul className="marquee marquee1" style={{ animationDuration: `${this.state.speed}%` }}>
      <ul className="marquee marquee1" style={style}>
        {domList}
      </ul >
    )
  }
}





/*
marquee using svg

bad
- not implemented
- between cycle, there is a blank time

good
- easy to infinite

*/

class Marquee2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let domList = this.props.danmuList.map((entry, key) => {
      return (
        // <li key={key}>{entry}</li>
        <li key={key}>
          <text x="20" y="100" fill="white"> {entry}
            <animate attributeName="x" from="-120%" to="120%" dur="25s" repeatCount="indefinite" fill="freeze" />
          </text>
        </li>
      )
    })

    return (
      <div className="marquee marquee2">
        <svg width="100%" style={{ background: '#438478' }}>
          <text x="20" y="100" fill="white"> entry..........................dddddddd..........................3489584...............................fdsafhjkdsfh........................................fsdajklfjsdkflhsdgjklhgfgdsf.......................fjadskfhjdsfkhsdagshskhjhfjhafjk
            <animate attributeName="x" from="100%" to="-100%" dur="15s" repeatCount="indefinite" fill="freeze" />
          </text>
        </svg>
      </div >
    )
  }
}
