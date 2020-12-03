import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";

class AllUsersComponent extends Component {

    state = {users: [], chosenUser: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users: usersFromAPI});
            });
    }

    selectThisUser = (id) => {
        let chosenUser = this.state.users.find(value => value.id === id);
        this.setState({chosenUser})
    }

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
                        {chosenUser.name} -
                        {chosenUser.email} -
                        {JSON.stringify(chosenUser.address)} -
                        {chosenUser.phone}
                    </p>)
                }

            </div>
        );
    }
}

export default AllUsersComponent;