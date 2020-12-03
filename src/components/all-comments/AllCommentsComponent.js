import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";

class AllCommentsComponent extends Component {

    state = {comments: [], chosenComment: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromAPI => {
                this.setState({comments: commentsFromAPI});
            });
    }

    selectThisComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id)
        this.setState({chosenComment})
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