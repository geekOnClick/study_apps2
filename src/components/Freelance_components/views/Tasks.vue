<template>
  <h1 class="text-white center" v-if="this.$store.state.freelanceStore.tasks === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <div class="card" v-for="task in tasksArr" :key="task.id">
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :status="task.status" :text="task.text"/>
      </h2>
      <p class='pt-5'>
        <strong >
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary top" @click="$router.push({ name: 'task', params: { id: task.id, name: task.name, description: task.description, date: task.date, status: task.status, text: task.text} })">Посмотреть</button>
    </div>
  </template>
</template>

<script>
//  
import AppStatus from '../components/AppStatus'
import { mapState } from 'vuex'
export default {
  components: {AppStatus},
  data() {
    return {}
  },
  computed: {
      ...mapState('freelanceStore', ['tasks', 'tasksArr', 'status', 'activeTasks'] ),
      

    }
}

</script>
<style scoped>
.card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card {
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
}
.text-white {
    color: #fff;
}

.text-white.center {
    text-align: center;
}
.pt-5 {
    padding-top: 25px;
}
.top {
    margin-top: 20px;
}
</style>
