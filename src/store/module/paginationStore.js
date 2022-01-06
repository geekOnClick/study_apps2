export default {
    namespaced: true,
    state() {
        return {
            openedPage: 1,
        }
    },
    getters: {
        currentPage(state){
            return state.openedPage
        }
    },
    mutations: {
        changePage(state, pageNumber) {
            state.openedPage = pageNumber
        }
    }
}