import React, { Component } from 'react'
import style from './HellworldBox.scss'

export class HellworldBox extends Component {
  componentDidMount()
  {
    this.refs.homebox.style.setProperty('--randomtime', (Math.random()+0.1) +'s');
  }
  render() {
    return (
        <div className={style.HomeBox} ref='homebox'>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>L</span>
            <span>D</span>
        </div>
    )
  }
}

export default HellworldBox
