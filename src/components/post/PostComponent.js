import React, {Component} from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

class PostComponent extends Component {
    render() {

        let {post, match: {url}} = this.props

        return (
            <div>
                {post.id} - {post.title}
                <Link to={`${url}/${post.id}`}>
                    <button>Show this post</button>
                </Link>
            </div>
        );
    }
}

export default withRouter(PostComponent);