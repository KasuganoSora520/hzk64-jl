// 引入模板
import React, {Component} from 'react';
import {SearchBar, WingBlank, Carousel} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './main.css';

import axios from '../http';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: ['1', '2', '3'],
            imgHeight: 176
        };
    };

    onChange = (key, value) => {
        // console.log(key, value);
        this.setState({
            value: value
        })
    };

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (<div>
            <SearchBar placeholder="Search" maxLength={8} onChange={(value) => {
                this.onChange(value);
            }}/>
            {/*<WingBlank>*/}
            <WingBlank>
                <Carousel autoplay={true} infinite beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log('slide to', index)}>{this.state.data.map(val => (<a key={val} href="http://www.alipay.com" style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}><img src={`https://zos.alipayobjects.com/rmsportal/${val}.png`} alt="" style={{width: '100%', verticalAlign: 'top'}} onLoad={() => {
                                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));this.setState({imgHeight: 'auto'});}}/></a>))}</Carousel>
            </WingBlank>
            {/*</WingBlank>*/}
        </div>);
    };
};

export default Main;