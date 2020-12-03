import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {

        let {comment} = this.props

        return (
            <div>
                {comment.id} - {comment.name}
                <button>Show this comment</button>
            </div>
        );
    }
}

export default CommentComponent;