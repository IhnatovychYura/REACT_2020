import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class CommentComponent extends Component {
    render() {

        let {comment, selectThisComment, match:{url}} = this.props

        return (
            <div>
                {comment.id} - {comment.name}
                <Link to={`${url}/${comment.id}`}>Show this comment</Link>

                <button onClick={()=>selectThisComment(comment.id)}>Show this comment</button>
            </div>
        );
    }
}

export default withRouter(CommentComponent);