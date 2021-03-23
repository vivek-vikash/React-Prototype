import React from 'react';
import {Router,
    Route,
    NavLink,
    Redirect,
    Switch,
    useLocation} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = () => {
    const history = createBrowserHistory()
    return(
        <Router history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/old-match">Old Match to be Redirected</NavLink>
                    </li>
                    <li>
                        <NavLink to="/will-match">Will Match</NavLink>
                    </li>
                    <li>
                        <NavLink to="/will-not-match">Will Not Match</NavLink>
                    </li>
                    <li>
                        <NavLink to="/also/will/not/match">Also will not match</NavLink>
                    </li>
                </ul>

                <Switch>
                <Route  exact path="/" component={Home}/>
                <Route path="/old-match" >
                    <Redirect to="/will-match"/>
                </Route>
                <Route path="/will-match" component={WillMatch}/>
                    {/* <Route path="*" component={NoMatch}/>*/}
            </Switch>
            </div>
        </Router>
    );
};

const Home = () => {
    return <h3>Home</h3>
}

const WillMatch = () => {
    return <h3>Matched!!</h3>
}

const NoMatch = () => {
      const location = useLocation();
    return (
        <div>
            <h3>
                No Match for {location.pathname} !
            </h3>
        </div>
    );
}

export default App;