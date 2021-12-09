import { createStore } from "vuex"

export default createStore({
    state: {
        openedPost: null,

    },
    mutations: {
        openNewPost(state, post){
            state.openedPost = post
        }
    }
})