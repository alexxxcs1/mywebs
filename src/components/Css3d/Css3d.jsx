import React, { Component } from 'react'
import style from './Css3d.scss';
const requireContext = require.context("./imgs/bkg", true, /^\.\/.*\.png$/);    //读取图片
const images = requireContext.keys().map(requireContext);           //生成图片数组

export class Css3d extends Component {
  constructor(prop)
  { 
    super(prop);
    this.state = {
      rotateY:0,
      interval:null,
      steep:0.1,
    };
    this.createBkgItem = this.createBkgItem.bind(this);
    this.calTranslateZ = this.calTranslateZ.bind(this);
  }
  componentDidMount()
  {
      console.log(images);
  }
  calTranslateZ(opts) {
    return Math.round(opts.width / (2 * Math.tan(Math.PI / opts.number)))
  }
  setPassword(index)
  {
      index==7?console.log('gamestart'):'';  //按到机关，跳转
  }
  c_MouseOver(e){
    if (e.clientX/window.innerWidth<0.4) {
      this.setState({
        steep:0.1,
      })
    }else if(e.clientX/window.innerWidth>0.6)
    {
      this.setState({
        steep:-0.1,
      })
    }else
    {
      this.setState({
        steep:0,
      })
    }
  }
  c_MouseEnter(e)
  { 
    if (!this.state.interval) {
      var self = this;
      this.state.interval= setInterval(()=>{
        self.setState({
          rotateY:self.state.rotateY+this.state.steep,
        })
      },1);
      this.setState({
        interval:this.state.interval,
      })
    }
  }
  c_MouseOut(e)
  { 
    clearInterval(this.state.interval);
    this.setState({
      interval:null,
    })
  }
  createBkgItem()
  {
    var deg = 360 / 20;
    
    var width = 93;
    var R = parseInt((width / 2) / Math.tan((deg/ 2 )* Math.PI / 180) - 1) // tan@ = 对边(R) / 临边(W/2)
    var width2rem = parseFloat(width) / window.rem;
    var cont = this;
    var startDeg = 180;
    var self = this;
    
    var itemNodes = images.map(function(itemBase,index) {   
      var transformStyle = {
        width:width2rem+'rem',
        backgroundImage:'url('+itemBase+')',
        transform:'translateX(-50%) rotateY('+startDeg+'deg) translateZ('+(-R)+'px)',
      }
      startDeg -= deg;
      return (
        <div
        key={'item'+Math.random()*1024} 
        className={style.item} onClick={self.setPassword.bind(self,index)} 
        style={transformStyle} />
      ); 
    });
    return itemNodes;
  }
  render() {
    return (
        <div className={style.hiddenbox} 
        onMouseOver={this.c_MouseOver.bind(this)}
        onMouseEnter={this.c_MouseEnter.bind(this)}
        onMouseOut={this.c_MouseOut.bind(this)}
        ref='view'>
            <div className={style.outbox}>
                <div className={style.Box} style={{transform:'rotateY('+this.state.rotateY+'deg)'}}>
                    {this.createBkgItem()}
                </div>
            </div>
        </div>
    )
  }
}

export default Css3d
