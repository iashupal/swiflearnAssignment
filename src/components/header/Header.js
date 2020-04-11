import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="header__container">
                <div></div>
                <Router>
                    <div className="header_links">
                        <ul>
                            <li><p className="header__upcoming">Upcoming<span> &nbsp;(</span><span className="dot"></span><span>)</span></p><Link to="/">Live Consultation</Link></li>
                            <li><Link to="/">Buy Plans</Link></li>
                            <li><Link to="/">View Plans</Link></li>
                            <li><button>Log In</button></li>
                        </ul>
                        <Switch>
                            <Route path="/"></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}
export default Header;