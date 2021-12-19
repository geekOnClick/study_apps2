<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/Freelance_components/components/TheNavbar'
export default {
    emits: ['open1'],
    props: {
        'openedMess': {
            required: false,
        },
    },
  components: {
    TheNavbar,
  }
}
</script>

<style scoped>
.container.with-nav {
    margin-top: 70px;
}
</style>
