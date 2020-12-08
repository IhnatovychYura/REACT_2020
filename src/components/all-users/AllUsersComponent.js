import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import UserService from "../../services/UserService";

class AllUsersComponent extends Component {

    userService = new UserService();

    state = {users: [], chosenUser: null};

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
            this.setState({users: users});
    }

    selectThisUser = (id) => {
        this.userService.getUserById(id)
            .then(value => this.setState({chosenUser: value}));
    };

    // ///////////////// Старий Варіант ////////////////////
    // selectThisUser = (id) => {
    //     let chosenUser = this.state.users.find(value => value.id === id);
    //     this.setState({chosenUser})
    // }

    render() {

        let {users, chosenUser} = this.state

        return (
            <div>
                <h1>All Users Page</h1>

                {
                    users.map(value => (<UserComponent
                        user={value}
                        key={value.id}
                        selectThisUser={this.selectThisUser}/>))
                }
                <hr/>
                {
                    chosenUser &&
                    (<p>
                        Name: {chosenUser.name} <br/>
                        E-mail: {chosenUser.email}<br/>
                        Address: {JSON.stringify(chosenUser.address)}<br/>
                        Phone number: {chosenUser.phone}<br/>
                    </p>)
                }

            </div>
        );
    }
}

export default AllUsersComponent;