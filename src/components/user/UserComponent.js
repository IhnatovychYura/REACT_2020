import React, {Component} from 'react';

class UserComponent extends Component {

    render() {

            let {user, i} = this.props;

        return (
            <div>
                <h3>{i+1} My name is <b>{user.name}</b></h3>
                <p>I'm {user.age} years old and it's {user.status.toString()} that I have a car</p>
                ___________________________________________________________________________________
            </div>
        );
    }
}

export default UserComponent;