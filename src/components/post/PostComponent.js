import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class PostComponent extends Component {
    render() {

        let {post, selectThisPost, match:{url}} = this.props

        return (
            <div>
                {post.id} - {post.title}
                <Link to={`${url}/${post.id}`}>Show this post</Link>
                <button onClick={() => selectThisPost(post.id)}>Show this post</button>
            </div>
        );
    }
}

export default withRouter(PostComponent);