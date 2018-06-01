import React, { Component } from 'react'
import style from './IndexContent.scss'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import ProgressBanner from '../../components/ProgressBanner'
import TopNav from '../../components/TopNav'

export class IndexContent extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        loaded:false
      };
  }
  componentWillReceiveProps(nextprops)
  {
    // this.ckAuthority(nextprops)
  }
  componentDidMount()
  {
    this.setState({
      pageonload:true,
    })
  }
  render() {
    return (
      <div className={style.IndexContentBox}>
        <ProgressBanner loaded={this.state.pageonload} color='random'/>
        <TopNav />

        <div className={style.SlideBox}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={style.SlideBox}>
        </div>

      </div>
    )
  }
}

export default IndexContent
