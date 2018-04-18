import React, { Component } from 'react';
import Topbar from '../component/topbar';
import Checkheader from '../component/checkheader';
import Checkitem from '../component/checkitem';
export default class Projectcheck extends Component {
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
                <Topbar title="项目审核" />
                <div style={{
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.05
                }}></div>
                <Checkheader />
                <Checkitem />
                <Checkitem projectname={'项目C'} />
                <Checkitem projectname={'项目D'} name={'王五'} />
                <div style={{
                    width: this.state.width * 0.85,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: this.state.height * 0.05
                }}>
                    <h>{'已无更多'}</h>
                </div>
            </div>
        );
    }
}