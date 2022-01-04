<template>
  <h1 class="text-white center" v-if="!getTasksAdded">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ getActiveTasks }}</h3>
    <div class="card"  v-for="task in getTaskArr" :key="task.id">
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :status="task.status.statusStyle" :text="task.status.statusText"/>
      </h2>
      <p class='pt-5'>
        <strong >
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary top" @click="$router.push({ name: 'task', params: { id: task.id, name: task.name, description: task.description, date: task.date, status:task.status.statusStyle, text:task.status.statusText, db: task.idDB} })">Посмотреть</button>
    </div>
  </template>
</template>

<script>
//  
import AppStatus from '../components/AppStatus'
import { mapGetters } from 'vuex'
export default {
  components: {AppStatus},
  computed: {
      ...mapGetters('freelanceStore', ['getActiveTasks', 'getTaskArr', 'getTasksAdded'] ),
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
