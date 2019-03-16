import React, {Component} from 'react';
import Router from './route';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div>
           <Router />
        </div>)
    }
}

export default App;
