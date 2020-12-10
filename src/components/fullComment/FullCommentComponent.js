import React, {Component} from 'react';
import CommentService from "../../services/CommentService";

class FullCommentComponent extends Component {

    state = {comment: null}
    commentService = new CommentService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props
        let comment = await this.commentService.getCommentById(id)
        this.setState({comment})
    }

    render() {

        let {comment} = this.state

        return (
            <div>
                {comment &&
                (<p>
                        ID: {comment.id} <br/>
                        Name: {comment.name}<br/>
                        Email: {comment.email}<br/>
                        Body: {comment.body}<br/>
                    </p>
                )}
            </div>
        );
    }
}

export default FullCommentComponent;