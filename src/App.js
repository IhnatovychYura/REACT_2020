import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";
import {Context} from "./services/ContextService";
import HooksComponent from "./components/hooks/HooksComponent";
import ReduxComponent from "./components/redux/ReduxComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <Context.Provider value={'This is context DATA from value'}>
                    <div>
                        <ul>
                            <li>
                                <Link to={'/users'}> Users </Link>
                            </li>

                            <li>
                                <Link to={'/posts'}> Posts </Link>
                            </li>

                            <li>
                                <Link to={'/comments'}> Comments </Link>
                            </li>

                            <li>
                                <Link to={'/hooks'}> Hooks </Link>
                            </li>
                            <li>
                                <Link to={'/redux'}> Redux </Link>
                            </li>
                        </ul>


                        <hr/>
                        <Switch>
                            {/*/////////////////// Variant запису ////////////////////////*/}
                            {/*<Route path={'/users'} component={AllUsersComponent}/>*/}
                            {/*<Route path={'/posts'} component={AllPostsComponent}/>*/}

                            <Route path={'/users'} render={()=>{
                                return <AllUsersComponent/>;
                            }}/>

                            <Route path={'/posts'} render={()=>{
                                return <AllPostsComponent/>;
                            }}/>

                            <Route path={'/comments'} render={()=>{
                                return <AllCommentsComponent/>;
                            }}/>

                            <Route path={'/hooks'} render={()=>{
                                return <HooksComponent/>;
                            }}/>

                            <Route path={'/redux'} render={()=>{
                                return <ReduxComponent/>;
                            }}/>
                        </Switch>
                        <hr/>

                        {/*<AllUsersComponent/>*/}
                        {/*<AllPostsComponent/>*/}
                        {/*<AllCommentsComponent/>*/}

                    </div>
                </Context.Provider>
            </Router>
        );
    }
}

export default App;