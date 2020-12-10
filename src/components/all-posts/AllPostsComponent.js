import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import PostService from "../../services/PostService";
import "./AllPosts.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllPostsComponent extends Component {

    postService = new PostService();

    state = {posts: [], chosenPost: null}

    async componentDidMount() {
        let posts = await this.postService.getAllPosts()
                this.setState({posts: posts});
    }

    selectThisPost = (id) => {
        this.postService.getPostById(id)
            .then(value => this.setState({chosenPost: value}));
    }

    render() {

        let {posts, chosenPost} = this.state

        return (
            <div>
                <h1>All posts</h1>
                {
                    posts.map(value => (<PostComponent
                        post={value}
                        key={value.id}
                        selectThisPost={this.selectThisPost}/>))
                }
                <hr/>
                <div className={'nest'}>

                    {/*<Switch>*/}
                    {/*    <Route path={'/users/:id'} render={()=>{*/}
                    {/*        return */}
                    {/*    }}/>*/}
                    {/*</Switch>*/}

                {
                    chosenPost &&
                    (<p>
                        ID: {chosenPost.id} <br/>
                        Title: {chosenPost.title}<br/>
                        Body: {chosenPost.body}<br/>
                    </p>)
                }
                </div>
            </div>
        );
    }
}

export default AllPostsComponent;