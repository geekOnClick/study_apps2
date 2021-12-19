<template>
  <div class="card">
    <h2>{{ $route.params.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="$route.params.status" :text="$route.params.text"/></p>
    <p><strong>Дэдлайн</strong>: {{ $route.params.date }}</p>
    <p><strong>Описание</strong>: {{ $route.params.description }}</p>
    <div>
      <button class="btn warning" @click="changeStatus('warning', 'Взято в работу')">Взять в работу</button>
      <button class="btn final" @click="changeStatus('final', 'Завершено')">Завершить</button>
      <button class="btn danger" @click="changeStatus('danger', 'Отменено')">Отменить</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { mapState } from 'vuex'
export default {
  components: {AppStatus},
  data() {
    return {
    }
  },
  computed: {
      ...mapState('freelanceStore', ['tasksArr', 'activeTasks'] ),
    },
  methods: {
    changeStatus(type, text){
      if(type == 'final' || type == 'danger') {
         this.$store.commit('freelanceStore/deductionActiveTasks')
      }
      else {
        this.$store.commit('freelanceStore/addictionActiveTasks')
      }
      let task = this.tasksArr.find(elem => elem.id == this.$route.params.id)
      task.status = type
      task.text = text
      this.$router.push('/freelance')
    }
  }
}
</script>

<style scoped>
.card {
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
}
.badge.primary {
    border-color: #3eaf7c;
    color: #3eaf7c;
}

.badge.danger {
    border-color: #e53935;
    color: #e53935;
}

.warning {
    border-color: #c25205;
    color: #c25205;
}
.final {
  border-color: green;
  color: green;
}
</style>