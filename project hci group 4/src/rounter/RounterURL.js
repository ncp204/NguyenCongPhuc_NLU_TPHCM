import React, { Component } from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Download from '../component/Download';
import Home from '../component/Home/Home';
import Vaccin from '../component/Vaccin';
import VietNam from '../component/VietNam';
import World from '../component/World';

class RounterURL extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/vietnam" component={VietNam} />
                    <Route exact path="/world" component={World} />
                    <Route exact path="/vaccin" component={Vaccin} />
                    <Route exact path="download" component={Download} />
                </Router>
            </div>
        );
    }
}

export default RounterURL;