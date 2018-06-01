import React, { Component } from 'react'
import style from './Home.scss'

import ProgressBanner from '../../components/ProgressBanner'
import HellworldBox from '../../components/HellworldBox'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageonload:false,
    };
  }
  componentDidMount()
  {
    setTimeout(() => {
      this.setState({
        pageonload:true,
      })
    }, 3000);
    
    window.addEventListener('scroll',()=>
    {
      var ScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      
    });
    
  }
  render() {
    return (
      <div className={style.Box}>
        <ProgressBanner loaded={this.state.pageonload} color='#fff'/>
        <HellworldBox />
        <div className={style.homeContent}></div>
        
      </div>
    )
  }
}

export default Home
