import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";
import CommentService from "../../services/CommentService";
import "./AllComments.css"
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import FullCommentComponent from "../fullComment/FullCommentComponent";

class AllCommentsComponent extends Component {

    commentService = new CommentService();

    state = {comments: []}

    async componentDidMount() {
        let comments = await this.commentService.getAllComments()
        this.setState({comments: comments});
    }

    render() {

        let {comments} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                <h1>All Comments</h1>

                { comments.map(value => (<CommentComponent comment={value} key={value.id}/>)) }

                <div className={'nest'}>
                    <Switch>
                        <Route path={url + '/:id'} render={(props)=>{
                            let {match: {params: {id}}} = props
                            return <FullCommentComponent {...props} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllCommentsComponent);