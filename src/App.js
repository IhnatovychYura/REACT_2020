import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";


class App extends Component {

    render() {
        return (
            <div>
               <AllUsersComponent/>

               <AllPostsComponent/>

               <AllCommentsComponent/>

            </div>
        );
    }
}

export default App;