import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {

        let {comment, selectThisComment} = this.props

        return (
            <div>
                {comment.id} - {comment.name}
                <button onClick={()=>selectThisComment(comment.id)}>Show this comment</button>
            </div>
        );
    }
}

export default CommentComponent;