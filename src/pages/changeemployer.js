import React, { Component } from 'react';
import Topbar from '../component/topbar';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import { Input, DatePicker, Select, Tooltip, Icon, Tag, Transfer, Button, Radio, Avatar, Upload, message, Modal } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: [{
        uid: 1,
        name: '工作合同.png',
        status: 'done',
        //reponse: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
    }],
};
export default class Changeemployer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            Name: '',
            sex: 1,
            Company: '',
            Telephone: '',
            Email: '',
            //loading: false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            Duty: ''
        })
    }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }
    saveInputRef = input => this.input = input

    handleChange = ({ fileList }) => this.setState({ fileList })
    // getBase64(img, callback) {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // }
    // beforeUpload(file) {
    //     // const isJPG = file.type === 'image/jpeg';
    //     // if (!isJPG) {
    //     //     message.error('You can only upload JPG file!');
    //     // }
    //     const isLt2M = file.size / 1024 / 1024 < 2;
    //     if (!isLt2M) {
    //         message.error('Image must smaller than 2MB!');
    //     }
    //     return isLt2M;
    // }
    // handleChange = (info) => {
    //     if (info.file.status === 'uploading') {
    //         this.setState({ loading: true });
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         this.getBase64(info.file.originFileObj, imageUrl => this.setState({
    //             imageUrl,
    //             loading: false,
    //         }));
    //     }
    // }
    onChangeName = (e) => {
        this.setState({ Name: e.target.value });
    }
    onChangeCompany = (e) => {
        this.setState({ Company: e.target.value });
    }
    onChangeDuty = (e) => {
        this.setState({ Duty: e.target.value });
    }
    onChangeSex = (e) => {
        this.setState({
            sex: e.target.value,
        });
    }
    onChangeTelephone = (e) => {
        this.setState({ Telephone: e.target.value });
    }
    onChangeEmail = (e) => {
        this.setState({ Email: e.target.value });
    }
    onChangeDate(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        const {
            Name,
            Company,
            Telephone,
            Email,
            previewVisible,
            previewImage,
            fileList,
            tags,
            inputVisible,
            inputValue,
            Duty
        } = this.state;
        return (
            <div style={{
                display: 'flex',
                width: this.state.width * 0.85,
                height: this.state.height,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Topbar title="编辑用户" />
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    height: this.state.height * 0.04,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                }}>
                    <Link to='/fabaomessage'><img style={{marginLeft: this.state.width * 0.02}} src={require('../icon/arrow_left.svg')}></img></Link>
                </div>
                <div style={{
                    display: 'flex',
                    width: this.state.width * 0.85,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <Scrollbars style={{
                        display: 'flex',
                        width: this.state.width * 0.85,
                        height: this.state.height * 0.94,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{
                            display: 'flex',
                            width: this.state.width * 0.85,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.35,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'姓名'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Input
                                            ref={node => this.NameInput = node}
                                            placeholder=""
                                            value={Name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'姓别'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <RadioGroup onChange={this.onChangeSex} value={this.state.sex}>
                                            <Radio value={1}>男</Radio>
                                            <Radio value={2}>女</Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'部门'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Input
                                            ref={node => this.CompanyInput = node}
                                            placeholder=""
                                            value={Company}
                                            onChange={this.onChangeCompany}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'职务'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Input
                                            ref={node => this.DutyInput = node}
                                            placeholder=""
                                            value={Duty}
                                            onChange={this.onChangeDuty}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'手机'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Input
                                            ref={node => this.TelephoneInput = node}
                                            placeholder=""
                                            value={Telephone}
                                            onChange={this.onChangeTelephone}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.width * 0.35,
                                    height: this.state.height * 0.06,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginTop: this.state.height * 0.04,
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.1,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: this.state.width * 0.04
                                    }}>
                                        <h>{'邮箱'}</h>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: this.state.width * 0.35,
                                        height: this.state.height * 0.06,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                        <Input
                                            ref={node => this.EmailInput = node}
                                            placeholder=""
                                            value={Email}
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: this.state.width * 0.5,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <div className="clearfix">
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 1 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: this.state.height * 0.2,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <h>{'用户头像'}</h>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            width: this.state.width * 0.85,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <Button style={{marginBottom:10}} type='primary'>完成修改</Button>
                            <Button type='danger'>删除用户</Button>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}