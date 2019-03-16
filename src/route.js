import {Route, HashRouter, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Login from './login/login';
import Home from './home/home';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (<div>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </HashRouter>
        </div>);
    };
};

export default Router;