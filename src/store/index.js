
import { createStore } from "vuex"
import postStore from "./module/postStore"
import freelanceStore from "./module/freelanceStore"

export default createStore({
    modules: {
        postStore,
        freelanceStore
    }
})