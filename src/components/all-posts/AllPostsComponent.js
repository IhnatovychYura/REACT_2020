import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class AllPostsComponent extends Component {

    state = {posts: [], chosenPost: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})
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