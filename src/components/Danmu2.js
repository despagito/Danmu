import React, { Component } from 'react'
// import Endless from 'endless-react'
import './App.css'


/*
- Use a queue to scroll.new item enter queue,once it's displayed, then dequeue.
- search, endless scroll
- 如果连续的话,那每个对话显示的时间长短就不一样了.而且对话与对话之间连成一片,不知道什么时候是新对话.

- https://github.com/skorekm/EndlessScroll-React 实现了基本的下拉加载功能,文档超级详细,用起来很贴心,适合学习.
- https://github.com/scrollback/endless 功能正是我需要的,但是版本太老了,需要自己重新实现一遍.

- 加载的同时删除
- 自动滚动
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
        <div className="scroll-bar">xxxxxx</div>
        {/* <Endless items={this.props.danmuList} onScroll={this.onScroll} /> */}
      </div >
    )
  }
}


