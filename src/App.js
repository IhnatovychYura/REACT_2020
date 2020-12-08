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
                        <Link to={'/users'}> users </Link>
                    </div>

                    <div>
                        <Link to={'/posts'}> posts </Link>
                    </div>

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

                    </Switch>

                    {/*<AllUsersComponent/>*/}

                    {/*<AllPostsComponent/>*/}

                    {/*<AllCommentsComponent/>*/}

                </div>
            </Router>
        );
    }
}

export default App;