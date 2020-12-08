import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class UserComponent extends Component {

    render() {

        let {user, selectThisUser, match:{url}} = this.props;

        return (
            <div>
                {user.id} - {user.name}
                <Link to={`${url}/${user.id}`}>Show this user</Link>
                <button onClick={() => selectThisUser(user.id)}>Show this user</button>
            </div>
        );
    }
}

export default withRouter(UserComponent);