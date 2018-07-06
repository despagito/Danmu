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
        <Marquee danmuList={this.props.danmuList} />
        <input type="text" />
      </div >
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

class Marquee extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let domList = this.props.danmuList.map((entry, key) => {
    //   return (
    //     // <li key={key}>{entry}</li>
    //     <li key={key}>
    //       <text x="20" y="100" fill="white"> {entry}
    //         <animate attributeName="x" from="-120%" to="120%" dur="25s" repeatCount="indefinite" fill="freeze" />
    //       </text>
    //     </li>
    //   )
    // })

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


// class Marquee extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {

//     return (
//       <div className="marquee marquee2">
//         ...............
//       </div >
//     )
//   }
// }