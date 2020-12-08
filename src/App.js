import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";
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
                <div>
                    <div>
                        <Link to={'/users'}> Users </Link>
                    </div>

                    <div>
                        <Link to={'/posts'}> Posts </Link>
                    </div>

                    <div>
                        <Link to={'/comments'}> Comments </Link>
                    </div>

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
                    </Switch>
                    <hr/>

                    {/*<AllUsersComponent/>*/}
                    {/*<AllPostsComponent/>*/}
                    {/*<AllCommentsComponent/>*/}

                </div>
            </Router>
        );
    }
}

export default App;