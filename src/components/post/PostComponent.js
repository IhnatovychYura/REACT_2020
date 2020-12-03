import React, {Component} from 'react';

class PostComponent extends Component {
    render() {

        let {post, selectThisPost} = this.props

        return (
            <div>
                {post.id} - {post.title}
                <button onClick={() => selectThisPost(post.id)}>Show this post</button>
            </div>
        );
    }
}

export default PostComponent;