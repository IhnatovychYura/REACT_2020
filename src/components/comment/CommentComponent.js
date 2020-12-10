import React, {Component} from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

class CommentComponent extends Component {
    render() {

        let {comment, match: {url}} = this.props

        return (
            <div>
                {comment.id} - {comment.name}
                <Link to={`${url}/${comment.id}`}>
                    <button>Show this comment</button>
                </Link>
            </div>
        );
    }
}

export default withRouter(CommentComponent);