import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Selfmsgcard1 from '../component/selfmsgcard1';
import Bolddivider from '../component/bolddivider';
import Selfsay from '../component/selfsay';
import { Scrollbars } from 'react-custom-scrollbars';
//const {ipcRenderer} = window.electron;

export default class Fabaomessage extends Component {
    constructor(props){
        super(props);
        this.state=({
          width:document.body.clientWidth,
          height:document.body.clientHeight,
        })     
    }
    render() {
        return (
            <div style={{
                display:'flex',
                width:this.state.width*0.85,
                height:this.state.height,
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center'
            }}>
                <Topbar title="发包者信息" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Selfmsgcard1 src1={require('../icon/chevron-left.svg')} src2={require('../icon/pencil-w.svg')} />
                    <Bolddivider />
                    <Selfsay />
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}