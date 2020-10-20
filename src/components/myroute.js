import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Notfound from './pages/notfound/notfound';

class Myroute extends Component {
    render() {
        return (
            <div>

                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Notfound} />

                </Switch>
                
            </div>
        );
    }
}

export default Myroute;