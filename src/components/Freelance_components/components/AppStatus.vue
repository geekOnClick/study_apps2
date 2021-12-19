<template>
  <span :class="['badge', status]" >{{ text }}</span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['status', 'text'],
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('freelanceStore', ['statusName'] )
  }
}
</script>
<style scoped>
  .badge {
    font-size: 0.8rem;
    border: 1px solid #eee;
    border-radius: 15px;
    padding: 0 .5rem;
}

.badge.primary {
    border-color: #3eaf7c;
    color: #3eaf7c;
}

.badge.danger {
    border-color: #e53935;
    color: #e53935;
}

.badge.warning {
    border-color: #c25205;
    color: #c25205;
}
.badge.final {
  border-color: green;
  color: green;
}
</style>