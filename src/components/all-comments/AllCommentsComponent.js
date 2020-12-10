import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";
import CommentService from "../../services/CommentService";
import "./AllComments.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllCommentsComponent extends Component {

    commentService = new CommentService();

    state = {comments: [], chosenComment: null}

    async componentDidMount() {
        let comments = await this.commentService.getAllComments()
        this.setState({comments: comments});
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
                <div className={'nest'}>

                    {/*<Switch>*/}
                    {/*    <Route path={'/users/:id'} render={()=>{*/}
                    {/*        return */}
                    {/*    }}/>*/}
                    {/*</Switch>*/}

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
            </div>
        );
    }
}

export default AllCommentsComponent;