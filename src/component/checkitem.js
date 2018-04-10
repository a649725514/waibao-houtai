import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Checkitem extends Component {
    static defaultProps = {
        projectname: '项目A',
        name: '张三',
        date: '2018.4.2',
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
                borderBottom: 'solid',
                borderBottomWidth: 1,
                borderBottomColor: '#e9e9e9'
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Link to='/projects'><h>{this.props.projectname}</h></Link>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{this.props.name}</h>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h style={{ color: 'black' }}>{this.props.date}</h>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.7 / 4,
                    height: this.state.height * 0.07,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 / 8,
                        height: this.state.height * 0.04,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        borderRight: 'solid',
                        borderRightColor: '#e9e9e9',
                        borderRightWidth: 1
                    }}>
                        <img style={{ marginRight: this.state.width * 0.01 }} src={require('../icon/checkmark.svg')}></img>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7 / 8,
                        height: this.state.height * 0.04,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                        <img style={{ marginLeft: this.state.width * 0.01 }} src={require('../icon/cross.svg')}></img>
                    </div>
                </div>
            </div>
        );
    }
}