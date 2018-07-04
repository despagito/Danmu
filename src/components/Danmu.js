import React, { Component } from 'react'
import './App.css'


export default class Danmu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newDanmuList: []
    }
    this.divideMarq()
  }
  componentDidMount() {
    // this.divideMarq()
  }
  componentWillMount() {
    // this.divideMarq()
  }
  componentDidUpdate() {

  }
  // how to make this run before render()
  divideMarq() {
    // // split this.props.danmuList into danmuLines * eachLineNums
    // let boardHeight = this.elemHeight
    let boardHeight = 400
    // console.log(boardHeight)
    let danmuLines = boardHeight / 50
    let eachLineNums = this.props.danmuList.length / danmuLines
    let danmuList = this.props.danmuList
    let newDanmuList = []

    while (danmuList.length) {
      newDanmuList.push(danmuList.splice(0, eachLineNums))
    }
    this.state.newDanmuList = newDanmuList // get error when using this.setState()
  }

  render() {
    let multiMarq = this.state.newDanmuList.map((entry, key) => {
      return (<Marquee1 danmuList={entry} key={key} />)
    })

    return (
      <div className="danmu-board" ref={(elem) => this.elemHeight = elem.clientHeight}>
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
    this.state = {
      speed: Math.floor(Math.random() * 20 + 5) + 's',
    }
  }

  render() {
    let domList = this.props.danmuList.map((entry, key) => {
      return (
        <li key={key}>{entry}</li>
      )
    })

    let style = {
      animationDuration: this.state.speed
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
