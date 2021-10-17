import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './inGameComponents/Header';
import SideBar from './inGameComponents/SideBar';
import WorkingOnIt from './inGameComponents/WorkingOnIt';

const Main = () =>  {
    return ( 
      <div>
          <Header />
          <Router>
                <Switch>
                    <React.Fragment>
                        <div className="ui internally grid">
                            <div className="row">
                                <div className="three wide column">
                                    <SideBar />
                                </div>
                                <div className="eleven wide column">
                                   <WorkingOnIt />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Switch>
            </Router>
      </div>
     )
}

export default Main;