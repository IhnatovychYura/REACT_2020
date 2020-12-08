import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";
import CommentService from "../../services/CommentService";

class AllCommentsComponent extends Component {

    commentService = new CommentService();

    state = {comments: [], chosenComment: null}

    componentDidMount() {
        this.commentService.getAllComments()
            .then(value => {
                this.setState({comments: value});
            })
    }

    selectThisComment = (id) => {
        this.commentService.getCommentById(id)
            .then(value => this.setState({chosenComment: value}));
    }

    render() {

        let {comments, chosenComment} = this.state

        return (
            <div>
                <h1>All Comments</h1>
                {
                    comments.map(value => (<CommentComponent
                        comment={value}
                        key={value.id}
                        selectThisComment={this.selectThisComment}
                    />))
                }

                <hr/>
                {
                    chosenComment &&
                    (<p>
                        ID: {chosenComment.id} <br/>
                        Name: {chosenComment.name}<br/>
                        Email: {chosenComment.email}<br/>
                        Body: {chosenComment.body}<br/>
                    </p>)
                }
            </div>
        );
    }
}

export default AllCommentsComponent;