import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import PostService from "../../services/PostService";

class AllPostsComponent extends Component {

    postService = new PostService();

    state = {posts: [], chosenPost: null}

    componentDidMount() {
        this.postService.getAllPosts()
            .then(value => {
                this.setState({posts: value});
            })
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
                {
                    chosenPost &&
                    (<p>
                        ID: {chosenPost.id} <br/>
                        Title: {chosenPost.title}<br/>
                        Body: {chosenPost.body}<br/>
                    </p>)
                }

            </div>
        );
    }
}

export default AllPostsComponent;