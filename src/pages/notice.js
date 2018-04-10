import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Say from '../component/say';
import Msg2 from '../component/msg2';
export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        })
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="全平台公告" />
                <Say />
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h style={{color:'black'}}>{'历史记录'}</h>
                </div>
                <Msg2 />
                <div style={{
                    width: this.state.width * 0.85,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: this.state.height * 0.05
                }}>
                    <h>{'暂无更多'}</h>
                </div>
            </div>
        );
    }
}