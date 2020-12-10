import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUserComponent extends Component {

    state = {user: null}
    userService = new UserService()

    async componentDidMount() {
        let {id} = this.props
        console.log(id)
        let user = await this.userService.getUserById(id);
        this.setState({user})
    }

    render() {

        let {user} = this.state

        return (
            <div>
                {user &&
                <p>
                    ID: {user.id} <br/>
                    Name: {user.name} <br/>
                    Surname: {user.username} <br/>
                    E-mail: {user.email} <br/>
                </p>}
            </div>
        );
    }
}

export default FullUserComponent;