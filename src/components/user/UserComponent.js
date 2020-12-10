import React, {Component} from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

class UserComponent extends Component {

    render() {

        let {user, match: {url}} = this.props;

        return (
            <div>
                {user.id} - {user.name} -
                <Link to={`${url}/${user.id}`}>
                    <button>Show this user</button>
                </Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);