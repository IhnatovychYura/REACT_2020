import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";

class AllCommentsComponent extends Component {

    state = {comments: []}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromAPI => {
                this.setState({comments: commentsFromAPI});
            });
    }

    render() {

        let {comments} = this.state

        return (
            <div>
                <h1>All Comments</h1>
                {
                    comments.map(value => (<CommentComponent comment={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllCommentsComponent;