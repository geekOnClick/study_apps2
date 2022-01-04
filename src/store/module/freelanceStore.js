import axios from 'axios';
import { statuses } from '@/data/statuses.js'

export default {
    namespaced: true,
    state() {
        return {
            tasksAdded: false,
            activeTasks: 0,
            tasksArr: [],
        }
    },
    getters: {
        getTasksAdded(state){
           return (state.tasksArr.length > 0) 
           ? state.tasksAdded = true
           : state.tasksAdded  
        },
        getActiveTasks(state){
           return state.activeTasks
        },
        getTaskArr(state) {
            return state.tasksArr
        }
    },
    mutations: {
        collectNewData(state,data) {
          let arr = Object.values(data)
            arr.forEach((item) => {
                if (item.status.statusStyle == 'warning') {
                    state.activeTasks++
                }
                return state.tasksArr.push(item)
          })
        },
        changeActiveTasks(state, type){
            if(type == 'final' || type == 'danger') {
                if(state.activeTasks !== 0){
                    state.activeTasks--
                }
             }
             else {
                state.activeTasks++
             }
        },
        changeTasksType(state, data){
            let task = state.tasksArr.find(elem => elem.id == data.id)
            task.status = data.status
        },
        updateTasksArr(state, data){
        state.tasksArr.push(data)
          console.log('tasksArr', state.tasksArr)

     }
    },
    actions: {
        async loadTasks({ commit }) {
            const response = await axios.get('https://freelance-test-vue-default-rtdb.firebaseio.com/tasks.json')
            if(response.data){
                commit('collectNewData', response.data)
            }
        },
        async addTaskToDB({ commit }, data){
             let name = await axios.post('https://freelance-test-vue-default-rtdb.firebaseio.com/tasks.json', 
            data)
            data.idDB = name.data.name
            await axios.patch(`https://freelance-test-vue-default-rtdb.firebaseio.com/tasks/${name.data.name}/.json`, {idDB:data.idDB})
            await commit ('updateTasksArr', data)
           
        },
        async changeDBInfo({ commit }, data){
            let newStatus = null
            switch(data.status){
                case 'warning':
                  newStatus = statuses.inWork;
                  break;
                case 'final':
                  newStatus = statuses.ended;
                  break;
                case 'danger':
                  newStatus = statuses.canceled;
                  break
              }
            await axios.patch(`https://freelance-test-vue-default-rtdb.firebaseio.com/tasks/${data.db}/status.json`, newStatus)
            await commit ('changeTasksType', {id: data.id, status: newStatus})
        }
    }
}