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
    state = {users: [], inputValue: ''};

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users: users});
    }

    myForm = React.createRef();

    ////// === Це метод який можна повісити на input, якщо не використовувати form === ////////
    // readInputValue = () => {
    //     console.log(this.input1.current.value)
    //     return this.input1.current.value
    // }

    submitUserId = (e) => {
        e.preventDefault(); // Неперезавантажує сторінку після натискання на кнопку !!!
        console.log(this.myForm.current[0].value);  // VARIANT 1 - спосіб через REACT
        // console.log(e.target.children[0].value); // VARIANT 2 - спосіб через JS
    }

    // Метод який робить контрольований Input
    commitState = (e) => {
        this.setState({inputValue: e.target.value})
    }

    render() {

        let {users, inputValue} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                <h1>All Users Page</h1>

                <h3>Enter <b>UserID</b> and you will get info about this User</h3>
                <form ref={this.myForm} onSubmit={this.submitUserId}>
                    <input type="number" onInput={this.commitState} value={this.state.inputValue}/>
                    <button>SHOW</button>
                </form>

                {inputValue &&
                (<FullUserComponent id={inputValue} key={inputValue}/>)
                }

                {users.map(value => (<UserComponent user={value} key={value.id}/>))}

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