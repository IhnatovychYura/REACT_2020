import React, {Component} from 'react';
import PostService from "../../services/PostService";

class FullPostComponent extends Component {

    state = {post: null}
    postService = new PostService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let post = await this.postService.getPostById(id)
        this.setState({post})
    }

    render() {

        let {post} = this.state

        return (
            <div>
                {post && (
                        <p>
                            ID: {post.id} <br/>
                            Title: {post.title}<br/>
                            Body: {post.body}<br/>
                        </p>)
                }
            </div>
        );
    }
}

export default FullPostComponent;