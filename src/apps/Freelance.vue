<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/Freelance_components/components/TheNavbar'
import { mapActions } from 'vuex'
export default {
    emits: ['open1'],
    props: {
        'openedMess': {
            required: false,
        },
    },
  components: {
    TheNavbar,
  },
  methods: {
      ...mapActions('freelanceStore', ['loadTasks'])
  },
  mounted() {
    this.loadTasks()
  }
}
</script>

<style scoped>
.container.with-nav {
    margin-top: 70px;
}
</style>
