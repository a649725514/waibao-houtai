import React, { Component } from 'react';
import { Rate, Breadcrumb, Button, Steps } from 'antd';
import arrowl from '../icon/arrow_left.svg';
import phone from '../icon/phone-b.svg';
import email from '../icon/envelope-b.svg';
import { Link } from "react-router-dom";
//import history from 'history/createBrowserHistory' 
const Step = Steps.Step;
export default class Projectcard extends Component {
    static defaultProps = {
        taskname: '项目B',
        date: '2017-12-30',
        mounth: 5,
        stars: 2,
        counts: 8,
        date0: '2017-12-15',
        date1: '2018-12-25',
        date2: '',
        date3: '',
        name: '甲',
        duty: '技术部 总监',
        tele: '12345678987',
        email: '123456789@qq.com',
        path: require('../pic/02.png')
    };
    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            step: 1
        };
    }
    next() {
        if (this.state.step < 3) {
            this.setState({ step: this.state.step + 1 })
            return;
        } else {
            return;
        }
    }
    back(e) {
        // e.goBack();
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
                // borderStyle:'solid',
                // borderWidth:1,
                // borderColor:'#e9e9e9',
            }}>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.08,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Link to='/projectcheck'><img onClick={this.back.bind(this)} style={{ marginLeft: 20, marginRight: 20 }} src={arrowl}></img></Link>
                        <h style={{ fontSize: 20 }}>{this.props.taskname}</h>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <Rate style={{ marginRight: this.state.width * 0.05 }} count={3} disabled defaultValue={this.props.stars} />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: this.state.width * 0.85 / 2,
                        height: 1,
                        backgroundColor: '#e9e9e9',
                    }}>
                    </div>
                    <div style={{
                        width: this.state.width * 0.85 / 2,
                        height: 1,
                    }}>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.08,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2,
                        height: this.state.height * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Breadcrumb>
                            <Breadcrumb.Item style={{ marginLeft: 20, color: 'black' }}>{'发布于' + this.props.date}</Breadcrumb.Item>
                            <Breadcrumb.Item>{'周期' + this.props.mounth + '个月'}</Breadcrumb.Item>
                            <Breadcrumb.Item><a href="">{this.props.counts + '人参与'}</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.85 / 2 - 50,
                        height: this.state.height * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.8,
                    height: this.state.height * 0.15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Steps current={this.state.step}>
                        <Step title="已发布" description={this.props.date0} />
                        <Step title="进行中" description={this.props.date1} />
                        <Step title="待审核" description={this.props.date2} />
                        <Step title="已完成" description={this.props.date3} />
                    </Steps>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.15,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <h style={{ fontSize: 20, marginLeft: this.state.width * 0.025 }}>技能方向</h>
                    <Button style={{ marginLeft: this.state.width * 0.025 }} >JAVA</Button>
                    <Button style={{ marginLeft: this.state.width * 0.025 }} >PHP</Button>
                    <Button style={{ marginLeft: this.state.width * 0.025 }} >PS</Button>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.8,
                    height: this.state.height * 0.15,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.1,
                        height: this.state.height * 0.15,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img style={{
                            width: this.state.height * 0.12,
                            height: this.state.height * 0.12,
                            borderRadius: this.state.height * 0.12 / 2,
                        }} src={this.props.path}></img>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: this.state.width * 0.7,
                        height: this.state.height * 0.15,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.7,
                            height: this.state.height * 0.15 / 2,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.15 / 2,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',
                            }}>
                                <h style={{ fontSize: 18, margin: 5 }}>{this.props.name}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.15 / 2,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',
                            }}>
                                <img style={{ margin: 5 }} src={phone}></img>
                                <h style={{ margin: 5 }}>{this.props.tele}</h>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.7,
                            height: this.state.height * 0.15 / 2,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.15 / 2,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                            }}>
                                <h style={{ margin: 5 }}>{this.props.duty}</h>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                height: this.state.height * 0.15 / 2,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                            }}>
                                <img style={{ margin: 5 }} src={email}></img>
                                <h style={{ margin: 5 }}>{this.props.email}</h>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}