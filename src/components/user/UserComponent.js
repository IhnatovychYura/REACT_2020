import React, {Component} from 'react';

class UserComponent extends Component {

    render() {

            let {user, selectThisUser} = this.props;

        return (
            <div>
                {user.id} - {user.name}
                <button onClick={() => selectThisUser(user.id)}>Show this user</button>
            </div>
        );
    }
}

export default UserComponent;