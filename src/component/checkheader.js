import React, { Component } from 'react';
export default class Checkheader extends Component {
    static defaultProps = {
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.7,
                height: this.state.height * 0.07,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: 'rgb(191,242,145)'
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{'名称'}</h>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{'发布者'}</h>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{'日期'}</h>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{'审核'}</h>
                </div>
            </div>
        );
    }
}