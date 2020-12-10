class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts'

   async getAllPosts() {
        return await fetch(this.url)
            .then(value => value.json())
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