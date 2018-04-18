import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Selfmsgcard from '../component/selfmsgcard';
import Bolddivider from '../component/bolddivider';
import Selfsay from '../component/selfsay';
import Workexp from '../component/workexp';
import Workskill from '../component/workskill';
import { Scrollbars } from 'react-custom-scrollbars';
//const {ipcRenderer} = window.electron;

export default class Waibaomessage extends Component {
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
                <Topbar title="接包者信息" />
                <Scrollbars style={{width:this.state.width*0.85,height:this.state.height*0.94}}>
                    <Selfmsgcard src1={require('../icon/chevron-left.svg')} src2={require('../icon/pencil-w.svg')} />
                    <Bolddivider />
                    <Selfsay />
                    <Bolddivider />
                    <Workexp />
                    <Bolddivider />
                    <Workskill />
                    <Bolddivider />
                    <div style={{
                        display:'flex',
                        width:this.state.width*0.85,
                        height:this.state.height*0.05,
                        backgroundColor:'white',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'flex-start',
                        borderBottom:'solid',
                        borderBottomColor:'#e9e9e9',
                        borderBottomWidth:1
                    }}>
                        <h style={{color:'black',marginLeft:20}}>{'最近工作时间'}</h>
                    </div>
                    <div style={{
                        display:'flex',
                        width:this.state.width*0.85,
                        height:50,
                        backgroundColor:'white',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'flex-start',
                    }}>
                        <h style={{marginLeft:20}}>{'2018/04/17/9:00-2018/04/17/17:00'}</h>
                    </div>
                    <Bolddivider />
                </Scrollbars>
            </div>
        );
    }
}