import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/index';
import indexGuide from './guide/indexGuide';
import Registrace from './authentication/Registrace';
//guide

//inGame


const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    {/* Main Page */}
                    <Route exact path="/" component={Home} />
                    {/* Guide */}
                    <Route exact path="/informace" component={indexGuide} />
                    {/* InGame */}
                    <Route exact path="/registrace" component={Registrace} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;