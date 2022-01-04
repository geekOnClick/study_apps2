export default {
    namespaced: true,
    state() {
        return {
            openedPost: null,
        }
    },
    mutations: {
        openNewPost(state, post){
            console.log(post)
            state.openedPost = post
            console.log(state.openedPost)
        }
    }
}