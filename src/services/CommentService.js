class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments'

    getAllComments() {
        return fetch(this.url)
            .then(value => value.json())
            .then(commentsFromAPI => {
                return commentsFromAPI
            });
    }

    getCommentById(id){
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
            .then(commentFromAPI => {
                return commentFromAPI
            });
    }

}

export default CommentService