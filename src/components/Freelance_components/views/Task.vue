<template>
  <div class="card">
    <h2>{{ $route.params.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="currentStatus" :text="currentText"/></p>
    <p><strong>Дэдлайн</strong>: {{ $route.params.date }}</p>
    <p><strong>Описание</strong>: {{ $route.params.description }}</p>
    <div>
      <button class="btn warning" @click="changeStatus({status: 'warning', id: $route.params.id, db: $route.params.db})">Взять в работу</button>
      <button class="btn final" @click="changeStatus({status: 'final', id: $route.params.id, db: $route.params.db})">Завершить</button>
      <button class="btn danger" @click="changeStatus({status: 'danger', id: $route.params.id, db: $route.params.db})">Отменить</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { statuses } from '@/data/statuses.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  components: {AppStatus},
  data() {
    return {
      currentStatus: this.$route.params.status,
      currentText: this.$route.params.text,
    }
  },
  computed: {
      ...mapGetters('freelanceStore', ['getTaskArr', 'getActiveTasks']),
    },
  methods: {
      ...mapMutations('freelanceStore', ['changeActiveTasks', 'changeTasksType']),
      ...mapActions('freelanceStore', ['changeDBInfo']),

    changeStatus(data){
      console.log(data)
      let newStatus = null;
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
      this.changeDBInfo(data)
      this.currentStatus = newStatus.statusStyle
      this.currentText = newStatus.statusText
      this.changeActiveTasks(data.status);
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