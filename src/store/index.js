
import { createStore } from "vuex"
import postStore from "./module/postStore"
import freelanceStore from "./module/freelanceStore"
import paginationStore from "./module/paginationStore"

export default createStore({
    modules: {
        postStore,
        freelanceStore,
        paginationStore
    }
})