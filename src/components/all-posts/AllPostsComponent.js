import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class AllPostsComponent extends Component {

    state = {posts: []}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    render() {

        let {posts} = this.state

        return (
            <div>
                <h1>All posts</h1>
                {
                    posts.map(value => (<PostComponent post={value} key={value.id}/>))
                }

            </div>
        );
    }
}

export default AllPostsComponent;