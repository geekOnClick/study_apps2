<template>
  <div class="wrap">
    <the-header></the-header>
    <div class="projects">
      <calc-icon @click="$router.push('/calc')"></calc-icon>
      <plan-icon @click="$router.push('/plan')"></plan-icon>
      <posts-icon @click="$router.push('/posts')"></posts-icon>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import Calc_icon from '@/components/Calc_icon.vue';
import Plan_icon from '@/components/Plan_icon.vue';
import Posts_icon from '@/components/Posts_icon.vue';

export default {

  components: { 
    'the-header':TheHeader,
    'calc-icon': Calc_icon,
    'plan-icon': Plan_icon,
    'posts-icon': Posts_icon
  },

}
</script>

