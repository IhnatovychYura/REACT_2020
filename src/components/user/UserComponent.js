import React from 'react';
import {Context} from "../../services/ContextService";
import {
    Link,
    withRouter
} from "react-router-dom";

function UserComponent(props) {
    const {user, match: {url}} = props
    console.log(user)

    return (
        <div>
            {user.id} - {user.name} -

            <Context.Consumer>
                {(value) => value}
            </Context.Consumer>

            <Link to={`${url}/${user.id}`}>
                <button>Show this user</button>
            </Link>
        </div>

    );
}

export default withRouter(UserComponent);