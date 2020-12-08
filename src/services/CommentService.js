class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments'

    async getAllComments() {
        return await fetch(this.url)
            .then(value => value.json())
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