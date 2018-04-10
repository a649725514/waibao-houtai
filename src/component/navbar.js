import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      //redirect:false,
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })
    // setInterval(()=>{
    //   this.setState({
    //     width:document.body.clientWidth,
    //     height:document.body.clientHeight
    //   })
    // },1)
  }
  render() {
    return (
      <div className="Shadow" style={{
        width: this.state.width * 0.15,
        height: this.state.height,
        backgroundColor: '#5CACEE',
        //backgroundColor:'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Link to='/contact'>
          <div style={{
            width: this.state.width * 0.15,
            height: this.state.height / 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={require('../icon/users.svg')}></img>
            <h style={{ color: 'black' }}>用户管理</h>
          </div>
        </Link>
        <Link to='/projectcheck'>
          <div style={{
            width: this.state.width * 0.15,
            height: this.state.height / 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={require('../icon/list-alt.svg')}></img>
            <h style={{ color: 'black' }}>项目审核</h>
          </div>
        </Link>
        <Link to='/notice'>
          <div style={{
            width: this.state.width * 0.15,
            height: this.state.height / 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* <Icon type='drawer'/> */}
            <img src={require('../icon/bullhorn.svg')}></img>
            <h style={{ color: 'black' }}>全平台公告</h>
          </div>
        </Link>
      </div>
    );
  }
}