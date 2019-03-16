// 主页的路由
import React, { Component } from 'react';
import { TabBar, Icon, Grid } from 'antd-mobile';
import axios from '../http';
import Chat from '../chat/chat';
import Main from '../main/main';
import Mine from '../mine/mine';
import News from '../news/news';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    };

    renderContent(pageText, title) {
        const value = this.state.selectedTab;
        // console.log(title, value);
        if (value === 'blueTab') {
            return (
                <div>
                    <Main />
                </div>
            );
        } else if (value === 'redTab') {
            return (
                <div>
                    <News />
                </div>
            );
        } else if (value === 'greenTab') {
            return (
                <div>
                    <Chat />
                </div>
            );
        } else if (value === 'yellowTab') {
            return (
                <div>
                    <Mine />
                </div>
            );
        }

    };

    render() {
        return (
            <div style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : { height: 400 }}>
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white"
                    hidden={this.state.hidden} tabBarPosition="bottom">
                    <TabBar.Item icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} />} selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} />} title="主页" key="Life" selected={this.state.selectedTab === 'blueTab'} onPress={() => { this.setState({ selectedTab: 'blueTab', }); }} data-seed="logId">
                        {this.renderContent('Life', this.state.selectedTab)}
                    </TabBar.Item>
                    <TabBar.Item icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} />} selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} />} title="咨询" key="Koubei" selected={this.state.selectedTab === 'redTab'} onPress={() => { this.setState({ selectedTab: 'redTab', }); }} data-seed="logId1">
                        {this.renderContent('Koubei', this.state.selectedTab)}
                    </TabBar.Item>
                    <TabBar.Item icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} />} selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} />} title="微聊" key="Friend" selected={this.state.selectedTab === 'greenTab'} onPress={() => { this.setState({ selectedTab: 'greenTab', }); }} data-seed="logId1">
                        {this.renderContent('Friend', this.state.selectedTab)}
                    </TabBar.Item>
                    <TabBar.Item icon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }} />} selectedIcon={<div style={{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }} />} title="我的" key="my" selected={this.state.selectedTab === 'yellowTab'} onPress={() => { this.setState({ selectedTab: 'yellowTab', }); }} data-seed="logId1">
                        {this.renderContent('My', this.state.selectedTab)}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    };
};

export default Home;