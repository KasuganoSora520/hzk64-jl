// 登录页面的路由
import React, {Component} from 'react';
import {NavBar, List, InputItem, WhiteSpace, Flex, Button, Toast, WingBlank} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'
import axios from '../http';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pwd: ''
        };
    };

    changeData = (key, value) => {
        console.log(value);
        this.setState({
            [key]: value
        });
    };

    login = async () => {
        const body = this.state;
        const {history} = this.props;
        const res = await axios.post(`users/login`, body);
        console.log(res);
        const {meta, data} = res.data;
        if (meta.status === 200) {
            // 进入home
            // console.log(data);
            history.push('/');
            // const name = data;
        } else {
            // 提示
            Toast.fail(meta.msg, 1)
        }
    };

    render() {
        return (
            <div>
                <Flex>
                    <Flex.Item>
                        <NavBar>登录</NavBar>
                    </Flex.Item>
                    <WhiteSpace/>
                </Flex>
                <WhiteSpace/>
                <Flex>
                    <Flex.Item>
                        <List>
                            <WingBlank>
                                <InputItem key={1} onChange={(value) => {
                                    this.changeData('uname', value)
                                }} value={this.state.uname}>姓名:</InputItem>
                                <InputItem kry={2} onChange={(value) => {
                                    this.changeData('pwd', value)
                                }} value={this.state.pwd}>密码:</InputItem>
                            </WingBlank>
                        </List>
                    </Flex.Item>
                </Flex>
                <WhiteSpace/>
                <Flex>
                    <Flex.Item>
                        <WingBlank>
                            <Button type="primary" style={{marginTop: '4px'}} onClick={() => {
                                this.login()
                            }}>登录</Button>
                        </WingBlank>
                    </Flex.Item>

                </Flex>
                <WhiteSpace/>
            </div>

        );
    };
};

export default Login;