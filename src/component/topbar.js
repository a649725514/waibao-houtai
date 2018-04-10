import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Topbar extends Component {
    static defaultProps={
        title:'开发者工作台'
    };
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight
        })
      }
      render(){
          return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height*0.06,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgb(241,241,245)'
              }}>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.75,
                  height:this.state.height*0.06,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:this.state.width*0.09
                }}>
                  {this.props.title}
                </div>
                <div style={{
                  display:'flex',
                  width:this.state.width*0.1,
                  height:this.state.height*0.06,
                  flexDirection:'row',
                  justifyContent:'flex-end',
                  alignItems:'center',
                }}>
                  <img style={{marginRight:15}} src={require('../icon/close.svg')} alt="close"></img>
                </div>
              </div>
          );
      }
}