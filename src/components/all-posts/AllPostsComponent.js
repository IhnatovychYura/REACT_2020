import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import PostService from "../../services/PostService";
import "./AllPosts.css"
import FullPostComponent from "../fullPost/FullPostComponent";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

class AllPostsComponent extends Component {

    postService = new PostService();
    state = {posts: []};

    async componentDidMount() {
        let posts = await this.postService.getAllPosts()
        this.setState({posts: posts});
    }

    render() {

        let {posts} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                <h1>All posts</h1>

                { posts.map(value => (<PostComponent post={value} key={value.id}/>)) }

                <div className={'nest'}>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            console.log(props)
                            let {match: {params: {id}}} = props
                            return <FullPostComponent {...props} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPostsComponent);