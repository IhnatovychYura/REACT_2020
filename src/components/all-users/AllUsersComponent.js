import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import UserService from "../../services/UserService";
import "./AllUsers.css";
import FullUserComponent from "../fullUser/FullUserComponent";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

class AllUsersComponent extends Component {

    userService = new UserService();
    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users: users});
    }

    render() {

        let {users} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                <h1>All Users Page</h1>

                { users.map(value => (<UserComponent user={value} key={value.id}/>)) }

                <div className={'nest'}>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            console.log(props)
                            let {match: {params: {id}}} = props
                            return <FullUserComponent id={id} key={id}/>;
                        }}/>

                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllUsersComponent);