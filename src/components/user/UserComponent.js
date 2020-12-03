import React, {Component} from 'react';

class UserComponent extends Component {

    render() {

            let {user} = this.props;

        return (
            <div>
                {user.id} - {user.name}
            </div>
        );
    }
}

export default UserComponent;