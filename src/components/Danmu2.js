import React, { Component } from 'react'
import Endless from 'endless-react'
import './App.css'


/*
- Use a queue to scroll.new item enter queue,once it's displayed, then dequeue.
- search, endless scroll
- 如果连续的话,那每个对话显示的时间长短就不一样了.而且对话与对话之间连成一片,不知道什么时候是新对话.
*/
export default class Danmu extends Component {
  constructor(props) {
    super(props)
  }

  onScroll(key, numItemsBefore, numItemsAfter) {
    console.log("scrolling", key, numItemsBefore, numItemsAfter)
  }

  render() {
    return (
      <div className="danmu-board">
        {/* <div className="scroll-bar">xxxxxx</div> */}
        <Endless items={this.props.danmuList} onScroll={this.onScroll} />
      </div >
    )
  }
}


