import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
//const { ipcRenderer } = window.electron;

export default class Workskill extends Component {
    static defaultProps = {
        src: null,
        skills: ['JavaScript']
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
                width: this.state.width * 0.85,
                //height:this.state.height*0.2,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.05,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <h style={{ marginLeft: 20 }}>技能</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.05,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <img style={{ marginRight: 20 }} src={this.props.src}></img>
                    </div>
                </div>
                <div style={{
                    width: this.state.width * 0.85,
                    height: 1,
                    backgroundColor: '#e9e9e9'
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    //height:this.state.height*0.15,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    margin: 20,
                    marginLeft: 60
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85,
                        //height:this.state.height*0.15,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        margin: 20,
                        marginLeft: 60
                    }} >
                        {
                            this.props.skills.map((skill) => {
                                return (
                                    <Button style={{ margin: 20 }} type="danger" >{skill} </Button>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}