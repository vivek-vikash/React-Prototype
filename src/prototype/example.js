import React from 'react';
import {Router,
    Route,
    Link,
    Redirect,
    Switch,} from 'react-router-dom';


const App = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/old-match"}>Old Match to be Redirected</Link>
                    </li>
                    <li>
                        <Link to={"/will-match"}>Will Match</Link>
                    </li>
                    <li>
                        <Link to={"/will-not-match"}>Will Not Match</Link>
                    </li>
                    <li>
                        <Link to={"/also/will/not/match"}>Also will not match</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route  path={"/old-match"}>
                    <Redirect to={"/will-match"}/>
                </Route>
                <Route  path={"/will-match"}>
                    <WillMatch/>
                </Route>
                <Route  path={"*"}>
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>

    );
}

const Home = () => {
    return <h3>Home</h3>
}

const WillMatch = () => {
    return <h3>Matched</h3>
}

const NoMatch = () => {

    return (
        <div>
            <h3>
                No Match
            </h3>
        </div>
    );
}

export default App;