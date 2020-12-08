class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllPosts() {
        return fetch(this.url)
            .then(value => value.json())
            .then(postsFromAPI => {
                return postsFromAPI
            });
    }

    getPostById(id){
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
            .then(postFromAPI => {
                return postFromAPI
            });
    }
}

export default PostService;