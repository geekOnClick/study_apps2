export default {
    namespaced: true,
    state() {
        return {
            tasks: 0,
            activeTasks: 0,
            tasksArr: [],
        }
    },
    mutations: {
        collectNewData(state,data) {
            data.id = state.tasks
            state.tasksArr.push(data)
            state.tasks++
        },
        deductionActiveTasks(state){
            if(state.activeTasks !== 0) {
                state.activeTasks--
            }
        },
        addictionActiveTasks(state){
            state.activeTasks++
        }
    },

}