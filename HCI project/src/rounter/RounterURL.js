import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home';
import VietNam from '../components/VietNam';
import World from '../components/World';
import Vaccin from '../components/Vaccin';
import Dowload from '../components/Dowload';

class RounterURL extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Route path="/" exact component={Home} />
                        <Route path="/vietnam" exact component={VietNam} />
                        <Route path="/world" exact component={World} />
                        <Route path="/vaccin" exact component={Vaccin} />
                        <Route path="/download" exact component={Dowload} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default RounterURL;