import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      isShow:false,
      arr:[
        {title:"我是1",content:[1,2,3]},
        {title:"我是2",content:[1,2,3]},
        {title:"我是3",content:[1,2,3]}
      ],
      num:null
    }
  }
  meng(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  isHand(index){
    if(this.state.num==index){
      this.setState({
        num:null
      })
    }else{
      this.setState({
        num:index
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{display: this.state.isShow==true ? 'block' : 'none',opacity:0.4,zIndex:-1,position:"absolute",background:"black",width:"100%",height:"100%"}} ref="big">蒙版</div>
        <div onClick={this.meng.bind(this)}>开始</div>
        <div className={this.state.isShow==true ? 'animated bounceInLeft' : 'animated slideOutLeft'} style={{background:'red',width:"100px"}}>
        {
          this.state.arr.map((value,index)=>{
            return (
              <div key={index}>
                <h1 onClick={this.isHand.bind(this,index)}>{value.title}</h1>
                <div style={{display: this.state.num==index?"block":"none"}}>
                {
                  value.content.map((v,i)=>{
                    return (
                      <h5 key={i}>{v}</h5>
                    )
                  })
                }
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
